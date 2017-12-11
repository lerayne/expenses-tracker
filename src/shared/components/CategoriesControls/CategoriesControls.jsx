/**
 * Created by lerayne on 19.02.17.
 */

import React from 'react'

import Navbar from 'react-bootstrap/lib/Navbar'
import Button from 'react-bootstrap/lib/Button'

export default function CategoriesControls({createCategory}) {
    return <div>
        <Navbar inverse className="narrow">
            <Navbar.Form>
                <Button
                    bsStyle="primary"
                    bsSize="xsmall"
                    onClick={createCategory}
                >Новая категория</Button>
            </Navbar.Form>
        </Navbar>
    </div>
}