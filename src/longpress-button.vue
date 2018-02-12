<script>
let timer = null;

export default {
    name: 'longpress-button',

    props: ['value', 'onConfirm', 'duration', 'pressingText', 'actionText'],

    created() {
        document.addEventListener('mouseup', () => this.cancel());
    },

    destroyed() {
        document.removeEventListener('mouseup', () => this.cancel());
    },

    data() {
        return {
            status: 'default',
            counter: 0
        }
    },

    methods: {
        triggerCount() {
            if (this.status === 'executing' || this.status === 'counting')
                return;

            this.status = 'counting';

            this.countAndConfirm();
        },

        countAndConfirm() {
            timer = setTimeout(() => {
                this.counter++;

                if (this.counter >= this.duration) {
                    this.status = 'executing';

                    clearTimeout(timer);

                    setTimeout(_ => {
                        if (this.onConfirm)
                            this.onConfirm(this.value || null);
                        
                        this.reset();
                    }, 1000);

                    return;
                }

                this.countAndConfirm();
            }, 1000);
        },

        reset() {
            this.status = 'default';
            this.cancel();
        },

        cancel() {
            if (this.status === 'executing')
                return;

            this.counter = 0;

            clearTimeout(timer);

            this.status = 'default';
        }
    },

    computed: {
        countingPressingText() {
            const pressingText = this.pressingText || '';
            return pressingText
                .replace(/\{\$counter\}/gi, this.counter)
                .replace(/\{\$rcounter\}/gi, this.duration - this.counter)
                .replace(/\{\$duration\}/gi, this.duration);
        }
    }
}
</script>

<template>
    <div class="longpress-button" :class="status"
        @touchend="cancel()"
        @touchstart.prevent="triggerCount()"
        @mouseup="cancel()"
        @mousedown.prevent="triggerCount()">

        <div>
            <slot v-if="status === 'default'"></slot>
            <span v-if="status === 'counting'">{{ countingPressingText || 'Keep pressing' }}</span>
            <span v-if="status === 'executing'">{{ actionText || 'Please wait...' }}</span>
        </div>
        <span class="progress-bar" :style="'animation-duration:'+duration+'s'"></span>
    </div>
</template>

<style lang="sass">
.longpress-button {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;

    .progress-bar {
        position: absolute;
        left: 0;
        width: 0;
        bottom: 0;
        height: 4px;
        background: #FFF;
        opacity: 0.4;
    }

    &.counting {
        .progress-bar {
            animation: longpress-progress 5s linear;
        }
    }

    &.executing {
        opacity: 0.5;
        cursor: denied;
    }
}

@keyframes longpress-progress {
    100% {
        width: 100%;
    }
}
</style>
