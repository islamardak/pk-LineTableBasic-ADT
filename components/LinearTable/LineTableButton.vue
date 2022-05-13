<template>
    <div class="table-item">
        <!-- Icon and Title  -->
        <div class="table-item__content">
            <img
                class="table-item__content-icon"
                src="@/assets/images/icon.svg"
                alt=""
            />

            <p class="table-item__content-title">{{ buttons_data.title }}</p>
        </div>

        <!-- this button -->
        <div class="table-item__info">
            <a-button variant="blue_outlined" size="sm">Button</a-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        buttons_data: {
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
</style>