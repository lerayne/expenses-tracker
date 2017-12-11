/**
 * Created by lerayne on 11.12.2017.
 */

import React from 'react'
import css from './StatsTotalPie.css'
import cn from 'classnames'
import {PieChart, Pie, Tooltip, LabelList, Cell} from 'recharts'
import {brightPalette} from '../../constants/colors'

export default function StatsTotalPie({totalCategories, totalExpenses}) {

    totalCategories = totalCategories.map(cat => {
        let {value, name, category} = cat

        if (name === null) name = 'Без категории'

        const part = value / totalExpenses

        return {
            value, name, category,
            part,
            displayPercent: part > 0.035 ? (part * 100).toFixed(0) + '%' : null,
            displayCategory: part > 0.025 ? name : null
        }
    })

    return <div className={cn(css.main)}>
        <PieChart width={500} height={300}>
            <Pie
                isAnimationActive={false}
                data={totalCategories}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                innerRadius={50}
            >
                {totalCategories.map((cat, i) => <Cell
                    key={i}
                    fill={brightPalette[i % brightPalette.length]}
                />)}
                <LabelList dataKey="displayCategory" position="outside" className="category"/>
                <LabelList dataKey="displayPercent" position="inside" className="percent"/>
            </Pie>
            <Tooltip
                itemStyle={{fontSize: '12px', padding: '10px'}}
                formatter={val => {
                    const part = val / totalExpenses
                    return `${(part * 100).toFixed(1)}% (${val} грн)`
                }}
            />
        </PieChart>
    </div>
}