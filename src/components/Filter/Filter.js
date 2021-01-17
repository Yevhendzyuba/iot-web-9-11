import React from "react";

import {CatalogSelect} from "../Global.styled";

function Filter({name, options, filterState: [value, setValue]}) {
    return (
        <CatalogSelect name='filter' value={value} onChange={e => setValue(e.target.value)}>
            <option value='None'>{name}</option>
            {options.map((thisOption) =>
                <option key={thisOption} value={thisOption}>{thisOption}</option>
            )}
        </CatalogSelect>
    );
}

export default Filter;