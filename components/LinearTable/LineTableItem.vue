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
                    {{ item_data.title }}
                </p>
            </div>

            <!-- Text and Login  -->
            <div class="table-item__block__info" v-if="item_data.login">
                <p class="table-item__block__info-text">{{ item_data.text }}</p>
                <nuxt-link to="/#" class="table-item__block__info-button">{{
                    item_data.login
                }}</nuxt-link>
            </div>

            <!-- Text  -->
            <div class="table-item__block__info" v-else>
                <p class="table-item__block__info-text">{{ item_data.text }}</p>
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
    components: {
        VueSimpleSpinner,
    },
    props: {
        item_data: {
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
    &__block {
        padding: 12px 16px;
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
        &__info {
            display: flex;
            align-items: center;
            &-text {
                font-size: 14px;
                font-family: sans-serif;
                margin: 0;
                color: #2c3e50;
            }
            &-button {
                font-family: sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: #007aff;
                text-decoration: none;
                margin-left: 16px;
            }
        }
    }
    &__loader {
        display: none;
    }
}
@media screen and (max-width: 768px) {
    .table-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        &__block {
            display: block;
            padding: 0;
            &__info {
                margin: 5px 0 0 23px;
            }
        }
        &__loader {
            display: block;
        }
    }
}
</style>