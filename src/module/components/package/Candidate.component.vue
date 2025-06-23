<template>
    <div class="box-candidate">
        <div class="title">
            <p>
                <span class="span">ค้นประวัติ</span>
                คุณภาพครอบคลุมกว่า 140 สาย
            </p>
            <p>จาก Candidate กว่า 2,300,000 คน</p>
            <p>ที่พร้อมจะร่วมงานกับคุณ
            </p>
            <button class="button">สมัครสมาชิก</button>
        </div>
        <div class="img">
            <img src="https://www.jobthai.com/static/images/search-candidate-jobthai-resume.svg" alt="">
        </div>
    </div>
    <div class="box-plat">
        <div class="form">
            <div class="img">
                <img src="https://www.jobthai.com/jobthai-app-static-page-assets/images/jobpost/jobthai-platform.svg" alt="">
            </div>
            <p class="chil">Platform ยอดนิยมสำหรับคนหางาน</p>
            <div class="dren">
                <p>121 ล้าน Pageviews จาก </p>
                <p> Candidate กว่า 3.5 ล้าน คน/เดือน</p>
                <p>และจำนวนเฉลี่ยใบสมัครกว่าเดือนละ</p>
                <p> 2 ล้านใบสมัคร ที่ส่งถึงองค์กร</p>
            </div>

        </div>
        <div class="clock">
            <div class="img">
                <img src="https://www.jobthai.com/jobthai-app-static-page-assets/images/jobpost/customize-job-posts-unlimited.svg" alt="">
            </div>
            <p class="chil">ปรับเปลี่ยนประกาศได้ไม่จำกัด ไม่มี</p>
            <div class="dren">
                <p>ไม่ใช่แค่แก้ไข Job Description แต่</p>
                <p>สามารถเปลี่ยนตำแหน่งงาน ประเภท</p>
                <p>งาน และรายละเอียดทุกอย่างได้</p>
                <p>ทั้งหมด จนกว่าจะหมดอายุสมาชิก</p>
            </div>

        </div>
        <div class="form">
            <div class="img">
                <img src="https://www.jobthai.com/jobthai-app-static-page-assets/images/jobpost/other-way-to-promote-your-job-posts.svg" alt="">
            </div>
            <p class="chil">เพิ่มช่องทางอื่น ๆ ในการเข้าถึง Candidate</p>
           <div class="dren">
                <p>ส่งตรงข้อมูลตำแหน่งงานที่น่าสนใจให้</p>
                <p>กับฐานผู้สมัครด้วย อีเมล Marketing</p>
                <p>และ Social Media เช่น</p>
                <p>Facebook, Instagram และ</p> 
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.box-candidate {
    display: flex;
    justify-content: space-between;
    padding: 30px 12%;
    margin: 50px;

    .title {
        font-size: 25px;
        font-weight: bold;
        line-height: 0.8;
        .span {
            color: #fe6d43;
        }
        .button {
            color: white;
            background-color: #fe6d43;
            margin-top: 50px;
        }
    }
    & img {
        width: 80%;
    }
}
.box-plat {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15%;
        .form {
        .img {
            text-align: center;
        }
        & img {
            height: 100px;
        }
        .chil {
            font-size: 25px;
            font-weight: bold;

        }
        .dren {
            font-size: 20px;
            line-height: 0.8;
            border-left: 4px solid #fe6d43;
            padding: 0 15px;
            width: 100%;
            height: 8vh;

        }
    }
    .clock {
        // border: 1px solid green;
        padding: 40px;
        .img {
            text-align: center;
        }

        & img {
            // width: 35%;
            height: 100px;
        }
        .chil {
            font-size: 25px;
            font-weight: bold;

        }
        .dren {
            font-size: 20px;
            line-height: 0.8;
            border-left: 4px solid #fe6d43;
            padding: 0 15px;
            width: 100%;
            height: 8vh;

        }
    }
}
</style>