<template lang="html">
  <div>
    <div class="pdj-uav"><img src="../assets/pdj_uav.png" alt="京东无人机" width="100%" /></div>
    <img src="../assets/logo.png" class="logo animated zoomIn">
    <a class="btn btn-choujiang" href="javascript:;" @click="isLogin"></a>
    <a class="btn btn-guize" href="javascript:;" @click="showGuiZe"></a>
    <div class="uav-guize" v-show="guize">
        <div class="guize-container animated">
          <p>活动规则</p>
          <ul>
              <li>1. 活动时间：2016年10月18日-20日</li>
              <li>2. 京东到家用户可以免费参与抽取宅购节大礼包，中奖用户将由达达使用无人机进行配送，还有机会获得京东到家优惠券。</li>
              <li>3. 老用户登录后即可参与活动，新用户注册成功后，即可参与活动。</li>
              <li>4. 每个用户仅限抽奖1次，同一ID、同一手机号、同一设备视为同一用户。</li>
              <li>5. 无人机配送将遵循国家相应法律法规。如因客观原因导致无人机无法正常配送，达达不承担无法配送带来的各项责任及后果。</li>
              <li>6.本活动最终解释权归达达所有。</li>
          </ul>
          <a class="btn-close" href="javascript:;" @click="closeGuiZe"></a>
        </div>
    </div>
    <div class="uav-choujiang" v-show="choujiang">
        <div class="choujiang-container animated">
            <a class="btn-choujiang-close" href="javascript:;" @click="closeChouJiang"></a>
            <a class="uav-coupon" href="https://daojia.jd.com/activity/coupons/index.html?code=a6657468055f4350b2fde3bb5ffbfe89"></a>
            <a class="btn-share" href="javascript:;" @click="showMasker"></a>
        </div>
        <div class="share-masker" v-show="masker"></div>
    </div>
    <loading v-show="isLoading"></loading>
  </div>

</template>

<script>
import loading from '../components/loading.vue';

export default {
    data() {
        return {
            guize: false,
            choujiang: false,
            masker: false,
            isLoading: false
        };
    },
    computed: {},
    ready() {

    },
    attached() {},
    methods: {
        isLogin: function() {
            var vm = this;
            var data = {
                functionId: "userInfo/login",
                body: {}
            }
            vm.$http.post('/client', data).then((response) => {
                this.choujiang = true;
            }, (response) => {
                console.log(response);
            });
        },
        closeChouJiang: function() {
            this.choujiang = false;
            this.masker = false;
        },
        showGuiZe: function() {
            this.guize = true;
        },
        closeGuiZe: function() {
            this.guize = false;
        },
        showMasker: function() {
            this.masker = true;
        }
    },
    components: {
        "loading": loading
    }
};

</script>

<style lang="css">
</style>
