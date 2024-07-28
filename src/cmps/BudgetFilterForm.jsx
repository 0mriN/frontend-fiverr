import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"

export function BudgetFilterForm({ applyFilter }) {
    const [value, setValue] = useState()

    function setFilterBy(event, valuenew) {
        setValue(valuenew)
    }

    function onApplyFilter(ev, value) {
        applyFilter(ev, value, 'budget')
    }

    // return <form className={`budget-filter-form ${isOpen ? '' : 'transparent'}`} >
    return <form className={`budget-filter-form `} >
        <section className="radio-container">
            <FormControl fullWidth={true}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={setFilterBy}>
                    <FormControlLabel
                        className="filter-label"
                        value="value"
                        control={<Radio color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 28, }, }} />} label="Value" />
                    <FormControlLabel
                        className="filter-label"
                        value="midRange"
                        control={<Radio color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 28, }, }} />} label="Mid-range" />
                    <FormControlLabel
                        className="filter-label"
                        value="highEnd"
                        control={<Radio color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 28, }, }} />} label="High-end" />
                </RadioGroup>
            </FormControl>
        </section>
        <div className="btn-container">
            <button className="btn clear-btn">Clear all</button>
            <button className="btn apply-btn" onClick={() => onApplyFilter(event, value)}>Apply</button>
        </div>
    </form>
}