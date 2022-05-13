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
                    {{ dropdown_data.title }}
                </p>
            </div>
            <!-- This is the open or close button in the desktop -->
            <div class="table-item__block__info-web">
                <div
                    class="table-item__block__info-web-button"
                    @click="advanced = !advanced"
                    v-if="!advanced"
                >
                    Показать
                </div>
                <div
                    v-else
                    @click="advanced = !advanced"
                    class="table-item__block__info-web-button"
                >
                    Скрыть
                </div>
            </div>

            <!-- This is the open or close button in the mobile -->
            <div class="table-item__block__info-mobile">
                <img
                    @click="advanced = !advanced"
                    v-if="!advanced"
                    class="table-item__block__info-mobile-button"
                    src="@/assets/images/icon-open-dropdown.svg"
                    alt=""
                />
                <img
                    v-else
                    @click="advanced = !advanced"
                    src="@/assets/images/icon-close-dropdown.svg"
                    alt=""
                />
            </div>
        </div>

        <!-- this dropdown -->
        <transition name="slide">
            <div v-if="advanced" class="table-item__block__dropdown">
                <div class="table-item__block__dropdown__content">
                    <div class="table-item__block__dropdown__content-title">
                        {{ dropdown_data.phone }}
                    </div>
                    <div class="table-item__block__dropdown__content__text">
                        {{ dropdown_data.numberOne }}
                    </div>
                    <div class="table-item__block__dropdown__content__text">
                        {{ dropdown_data.numberTwo }}
                    </div>
                    <div class="table-item__block__dropdown__content-title">
                        {{ dropdown_data.email }}
                    </div>
                    <div class="table-item__block__dropdown__content__text">
                        {{ dropdown_data.emailOne }}
                    </div>
                    <div class="table-item__block__dropdown__content__text">
                        {{ dropdown_data.emailTwo }}
                    </div>
                    <div
                        class="table-item__block__dropdown__content__references"
                    >
                        <div
                            class="
                                table-item__block__dropdown__content__references-web
                            "
                        >
                            <img
                                class="
                                    table-item__block__dropdown__content__references-web-icon
                                "
                                src="@/assets/images/icon_info.svg"
                                alt=""
                            />
                            <span>
                                Для добавления или редактирования контактной
                                информации требуется
                            </span>
                            <nuxt-link
                                to="/"
                                class="
                                    table-item__block__dropdown__content__references-web-button
                                "
                            >
                                пройти верификацию
                            </nuxt-link>
                        </div>
                        <div
                            class="
                                table-item__block__dropdown__content__references-mobile
                            "
                        >
                            <a-button variant="blue_outlined" size="sm"
                                >Button</a-button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            advanced: false,
        };
    },
    props: {
        dropdown_data: {
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
    .table-item__block {
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
            &-web {
                &-button {
                    font-family: sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 24px;
                    color: #007aff;
                    text-decoration: none;
                    margin-left: 16px;
                    cursor: pointer;
                }
            }
            &-mobile {
                display: none;
            }
        }
        &__dropdown {
            &__content {
                padding: 5px 16px 12px;
                &-title {
                    text-align: right;
                    font-family: sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    color: #2c3e50;
                    margin: 15px 0 5px;
                    &:first-child {
                        margin: 0px 0 10px;
                    }
                }
                &__text {
                    text-align: right;
                    margin-bottom: 5px;
                    font-family: sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    color: #2c3e50;
                }
                &__references {
                    margin: 10px 0 0;
                    &-web {
                        margin-bottom: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: right;
                        font-family: sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14px;
                        color: #2c3e50;
                        span {
                            margin-right: 5px;
                        }
                        &:last-child {
                            margin: 15px 0 0px;
                        }
                        &-icon {
                            margin-right: 9px;
                        }
                    }
                    &-mobile {
                        display: none;
                    }
                }
            }
        }
    }
}
.slide-enter-active {
    transition-duration: 0.3s;
    transition-timing-function: ease-in;
}

.slide-leave-active {
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
    max-height: 95px;
    overflow: hidden;
}

.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}
@media screen and (max-width: 768px) {
    .table-item {
        .table-item {
            &__block {
                &__info {
                    &-web {
                        display: none;
                    }
                    &-mobile {
                        display: block;
                    }
                }
                &__dropdown {
                    &__content {
                        &-title {
                            text-align: left;
                            margin: 15px 0 5px 23px;
                            &:first-child {
                                margin: 0px 0 10px 23px;
                            }
                        }
                        &__text {
                            text-align: left;
                            display: flex;
                            margin-left: 23px;
                        }
                        &__references {
                            &-web {
                                margin-bottom: 16px;
                                align-items: flex-start;
                                span {
                                    margin: 0;
                                }
                                &-button {
                                    display: none;
                                }
                            }
                            &-mobile {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>