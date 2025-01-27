import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"

export function DeliveryTimeFilterForm({ applyFilter }) {
    const [value, setValue] = useState()

    function setFilterBy(event, valuenew) {
        setValue(valuenew)
    }

    function onApplyFilter(ev, value) {
        applyFilter(ev, value, 'deliveryTime')
    }

    return <form className={`delivery-time-filter-form`} >
        <section className="radio-container">
            <FormControl fullWidth={true}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={setFilterBy}>
                    <FormControlLabel
                        className="filter-label"
                        value="express"
                        control={<Radio color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 28, }, }} />} label="Express 24H" />
                    <FormControlLabel
                        className="filter-label"
                        value="threeDays"
                        control={<Radio color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 28, }, }} />} label="Up to 3 days" />
                    <FormControlLabel
                        className="filter-label"
                        value="sevenDays"
                        control={<Radio color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 28, }, }} />} label="Up to 7 days" />
                    <FormControlLabel
                        className="filter-label"
                        value="anytime"
                        control={<Radio color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 28, }, }} />} label="Anytime" />
                </RadioGroup>
            </FormControl>
        </section>
        <div className="btn-container">
            <button className="btn clear-btn">Clear all</button>
            <button className="btn apply-btn" onClick={() => onApplyFilter(event, value)}>Apply</button>
        </div>
    </form>
}