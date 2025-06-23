<template>
    <div class="box-position">
        <div class="job">
            <p class="body">โฆษณาตำแหน่งงาน</p>
            <p class="id">“JobThai Platform” แพลทฟอร์มหางาน สมัครงาน ยอดนิยมของคนทำงาน</p>
        </div>
        <div class="box-img">
            <div class="img">
                <img src="https://www.jobthai.com/static/images/package/jobPostingPrice/www.svg" alt="">
                <p class="amount">จำนวนเฉลี่ยผู้เข้าใช้งานกว่า</p>
                <p class="price">3,500,000</p>
                <p class="pepo">คน/เดือน</p>
            </div>
            <div class="img">
                <img src="https://www.jobthai.com/static/images/package/jobPostingPrice/profile-resume.svg" alt="">
                <p class="amount">จำนวนเฉลี่ยใบสมัครสู่องค์กรทั้งหมดกว่า</p>
                <p class="price">2,000,000</p>
                <p class="pepo">ครั้ง/เดือน</p>

            </div>
            <div class="img">
                <img src="https://www.jobthai.com/static/images/package/jobPostingPrice/group-resume.svg" alt="">
                <p class="amount">จำนวนเฉลี่ยผู้สมัครงานถึงบริษัทกว่า</p>
                <p class="price">200,000</p>
                <p class="pepo">ครั้ง/เดือน</p>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.box-position {
    // border: 1px solid red;
    background: rgb(246, 247, 251);
    padding: 40px;
    .job {
        line-height: 0.3;
        text-align: center;
        .body {
            font-size: 36px;
            font-weight: bold;
            color: #148e78;
        }
        .id {
            font-size: 18px;
        }

    }
    .box-img {
        display: flex;
        justify-content: center;
        align-items: center;


        .img {
            // border: 1px solid red;
            margin: 20px;
            text-align: center;
            padding: 20px 25px;
            width: 20%;
            line-height: 0.7;
            background-color: white;
            border-radius: 10px;
            & img {
                text-align: center;
            }
            .amount {
                font-size: 18px;
                color: #231f20;
            }
        }
        .price {
            font-size: 28px;
            color: #fe6d43;
            font-weight: bold;
        }
        .pepo {
            font-size: 14px;
            color: #9d9d9d;
        }
    
    
    


        
    }
}
</style>