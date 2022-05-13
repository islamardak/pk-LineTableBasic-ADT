<template>
    <div class="table-item">
        <div class="table-item__block">
            <!-- Icon and Title  -->
            <div class="table-item__block__content">
                <img
                    class="table-item__block__content-icon"
                    src="@/assets/images/icon.svg"
                    alt=""
                />

                <p class="table-item__block__content-title">
                    {{ maps_data.title }}
                </p>
            </div>

            <!-- User Information -->
            <div class="table-item__block__map">
                <!-- This adress -->
                <p class="table-item__block__map-address">
                    {{ maps_data.address | truncateText(25) }}
                </p>
                <!-- this is a map -->
                <div class="table-item__block__map-info">
                    <img
                        class="table-item__block__map-info-icon"
                        src="@/assets/images/icon-map.svg"
                        alt=""
                    />
                    <div class="table-item__block__map-info-text">
                        Показать на карте
                    </div>
                </div>
            </div>
        </div>

        <!-- this is an example of a bootloader in the mobile version -->
        <div class="table-item__loader">
            <vue-simple-spinner size="medium" />
        </div>
    </div>
</template>

<script>
import VueSimpleSpinner from "vue-simple-spinner";

export default {
    components: { VueSimpleSpinner },
    props: {
        maps_data: {
            type: Object,
            default() {
                return {};
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.table-item {
    padding: 12px 16px;
    &__block {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__content {
            display: flex;
            align-items: center;
            &-icon {
                width: 14px;
                height: 14px;
                margin-right: 9px;
            }
            &-title {
                font-size: 12px;
                font-family: sans-serif;
                margin: 0;
                color: #2c3e50;
            }
        }

        &__map {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-address {
                font-size: 14px;
                font-family: sans-serif;
                margin: 0 24px 0 0;
                color: #2c3e50;
            }
            &-info {
                display: flex;
                align-items: center;
                &-icon {
                    margin-right: 12px;
                }
                &-text {
                    font-family: sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    color: #007aff;
                    cursor: pointer;
                }
            }
        }
    }
    &__loader {
        display: none;
    }
}
@media screen and(max-width:768px) {
    .table-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__block {
            display: block;
            &__map {
                &-address {
                    margin-left: 23px;
                }
                &-info {
                    display: none;
                }
            }
        }
    }
}
</style>