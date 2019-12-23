<template>
  <div class="resize-tip">
    <span class="tip">{{ $i18n('改变弹窗大小') }}</span>
    <span v-if="sides.includes('left')" class="position position-left">
      <svg class="icon" style="width: 1.3994140625em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1433 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1860"><path d="M1433.6 614.4H409.6l256 256-153.6 153.6L0 512 512 0l153.6 153.6-256 256h1024z" fill="#7dc5eb" p-id="1861"></path><path d="M1024 409.6v204.8h409.6V409.6z" fill="#333303" p-id="1862"></path></svg>
    </span>
    <span v-if="sides.includes('right')" class="position position-right">
      <svg class="icon" style="width: 1.3994140625em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1433 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1896"><path d="M0 614.4h1024l-256 256 153.6 153.6 512-512L921.6 0l-153.6 153.6 256 256H0z" fill="#7dc5eb" p-id="1897"></path><path d="M409.6 409.6v204.8H0V409.6z" fill="#333333" p-id="1898"></path></svg>
    </span>
    <span v-if="sides.includes('top')" class="position position-top">
      <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1848"><path d="M585.142857 1024V292.571429l182.857143 182.857142 109.714286-109.714285L512 0 146.285714 365.714286l109.714286 109.714285 182.857143-182.857142v731.428571z" fill="#7dc5eb" p-id="1849"></path><path d="M438.857143 731.428571h146.285714v292.571429H438.857143z" fill="#333333" p-id="1850"></path></svg>
    </span>
    <span v-if="sides.includes('bottom')" class="position position-bottom">
      <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1920"><path d="M585.142857 0v731.428571l182.857143-182.857142 109.714286 109.714285-365.714286 365.714286L146.285714 658.285714l109.714286-109.714285 182.857143 182.857142V0z" fill="#7dc5eb" p-id="1921"></path><path d="M438.857143 292.571429h146.285714V0H438.857143z" fill="#333303" p-id="1922"></path></svg>
    </span>
    <span v-if="sides.includes('top-left')" class="position position-top-left">
      <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1848"><path d="M585.142857 1024V292.571429l182.857143 182.857142 109.714286-109.714285L512 0 146.285714 365.714286l109.714286 109.714285 182.857143-182.857142v731.428571z" fill="#7dc5eb" p-id="1849"></path><path d="M438.857143 731.428571h146.285714v292.571429H438.857143z" fill="#333333" p-id="1850"></path></svg>
    </span>
    <span v-if="sides.includes('top-right')" class="position position-top-right">
      <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1848"><path d="M585.142857 1024V292.571429l182.857143 182.857142 109.714286-109.714285L512 0 146.285714 365.714286l109.714286 109.714285 182.857143-182.857142v731.428571z" fill="#7dc5eb" p-id="1849"></path><path d="M438.857143 731.428571h146.285714v292.571429H438.857143z" fill="#333333" p-id="1850"></path></svg>
    </span>
    <span v-if="sides.includes('bottom-left')" class="position position-bottom-left">
      <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1920"><path d="M585.142857 0v731.428571l182.857143-182.857142 109.714286 109.714285-365.714286 365.714286L146.285714 658.285714l109.714286-109.714285 182.857143 182.857142V0z" fill="#7dc5eb" p-id="1921"></path><path d="M438.857143 292.571429h146.285714V0H438.857143z" fill="#333303" p-id="1922"></path></svg>
    </span>
    <span v-if="sides.includes('bottom-right')" class="position position-bottom-right">
      <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1920"><path d="M585.142857 0v731.428571l182.857143-182.857142 109.714286 109.714285-365.714286 365.714286L146.285714 658.285714l109.714286-109.714285 182.857143 182.857142V0z" fill="#7dc5eb" p-id="1921"></path><path d="M438.857143 292.571429h146.285714V0H438.857143z" fill="#333303" p-id="1922"></path></svg>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    sides: {
      type: Array,
      default() {
        return [
          'top',
          'right',
          'bottom',
          'left',
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right',
        ];
      },
    },
  },
}
</script>

<style lang="less">
  .resize-tip {
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    .tip {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .position {
      position: absolute;
    }
    .position-left {
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .position-right {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .position-top {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .position-bottom {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .position-top-left {
      top: 0;
      left: 0;
      transform: rotate(-45deg);
    }
    .position-top-right {
      top: 0;
      right: 0;
      transform: rotate(45deg);
    }
    .position-bottom-left {
      bottom: 0;
      left: 0;
      transform: rotate(45deg);
    }
    .position-bottom-right {
      bottom: 0;
      right: 0;
      transform: rotate(-45deg);
    }
  }
</style>
