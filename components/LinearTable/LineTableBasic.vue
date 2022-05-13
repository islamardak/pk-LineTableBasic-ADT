<template>
    <div class="table-line">
        <!-- Normal Table -->
        <LineTableItem
            v-for="item in items"
            :key="item.title"
            :item_data="item"
        />

        <!-- Dropdown Table -->
        <LineTableDropdown
            v-for="dropdown in dropdowns"
            :key="dropdown.title"
            :dropdown_data="dropdown"
        />

        <!-- Map Table -->
        <LineTableAddress
            v-for="map in maps"
            :key="map.title"
            :maps_data="map"
        />

        <!-- Button Table -->
        <LineTableButton
            v-for="button in buttons"
            :key="button.title"
            :buttons_data="button"
        />
    </div>
</template>

<script>
import LineTableItem from "@/components/LinearTable/LineTableItem";
import LineTableDropdown from "@/components/LinearTable/LineTableDropdown";
import LineTableAddress from "@/components/LinearTable/LineTableAddress";
import LineTableButton from "@/components/LinearTable/LineTableButton";

import { items, dropdowns, maps, buttons } from "@/configs/Info.js";
export default {
    components: {
        LineTableItem,
        LineTableDropdown,
        LineTableAddress,
        LineTableButton,
    },
    data() {
        return {
            items,
            dropdowns,
            maps,
            buttons,
        };
    },
};
</script>

<style lang="scss" scoped>
.table-line {
    max-width: 906px;
    margin: 100px auto 0;
}
.table-item:nth-child(odd) {
    background: #bdc7ce33;
}
</style>