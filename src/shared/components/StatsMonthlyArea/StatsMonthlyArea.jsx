/**
 * Created by lerayne on 11.12.2017.
 */

import React from 'react'
import {AreaChart, Area, XAxis, YAxis, Tooltip, Legend} from 'recharts'
import sortBy from 'lodash.sortby'
import {brightPalette, palePalette} from '../../constants/colors'
import css from './StatsMonthlyArea.css'

function toPercent(decimal, fixed = 0){
    return `${(decimal * 100).toFixed(fixed)}%`;
}

export default function StatsMonthlyArea({totalExpenses, totalsByMonths}) {

    // get the list of all valuable categories
    let categories = []

    totalsByMonths.forEach(monthData => {
        // if this category has at least one item - include it
        monthData.categories.forEach(cat => {
            let catIndex = categories.findIndex(catListEl => catListEl.id === cat.category)

            if (catIndex === -1){
                catIndex = (-1) + categories.push({
                    id: cat.category || 0,
                    name: cat.name || 'Без категории',
                    valuable: false
                })
            }

            // if this category sum exceeds given margin at least once - it's valuable
            const part = cat.value / monthData.total
            if (part > 0.04) {
                categories[catIndex].valuable = true
            }
        })
    })

    categories = sortBy(categories, ['id'])

    // format data for reCharts
    const chartData = totalsByMonths.map(monthData => {

        const chartMonthData = {
            month: monthData.targetMonth,
            total: monthData.total,
            "-1": 0
        }

        monthData.categories.forEach(monthCat => {

            if (monthCat.category === null) monthCat.category = 0

            //valuable data is passing without changes, invaluable is stacked in "others"
            const category = categories.find(catListEl => catListEl.id === monthCat.category)

            if (category.valuable){
                chartMonthData[category.id] = monthCat.value
            } else {
                chartMonthData["-1"] += monthCat.value
            }
        })

        return chartMonthData
    })

    const otherCatsCount = categories.filter(cat => !cat.valuable).length
    categories = categories.filter(cat => cat.valuable)

    categories.unshift({
        id:-1,
        name:`Другое (${otherCatsCount} кат.)`
    })

    console.log('data', chartData)
    console.log('cats', categories)

    return <div className={css.main}>
        <AreaChart width={630} height={300} data={chartData} stackOffset="expand">

            <YAxis tickCount={2} tickFormatter={toPercent}/>
            <XAxis dataKey="month"/>

            {/* Chart reverses data, so I need to reverse it too */}
            {categories.reverse().map((cat, i) => <Area
                key={cat.id}
                dataKey={cat.id}
                name={cat.name}
                type="linear"
                stackId="1"
                fill={brightPalette[i % brightPalette.length]}
                stroke={brightPalette[i % brightPalette.length]}
                isAnimationActive={false}
            />)}

            <Tooltip
                itemStyle={{fontSize: '12px', paddingTop:0, paddingBottom:0}}
                formatter={(val, label, object, index) => {
                    return `${toPercent(val / object.payload.total, 1)} (${val} грн)`}
                }
                itemSorter={(a, b) => {
                    return a.dataKey - b.dataKey
                }}
            />
        </AreaChart>
    </div>
}