<template>
    <div class="navbar">
        <p class="tso">TSO NPE HU NKAUJ</p>
        <p class="koj">Tso Koj Cov Npe Thiab Chaw Nyob Rau Ntawv No.</p>
    </div>
    <div class="detail">
        <div class="chil">
            <p class="name">Name:</p>
            <p class="please">Plsase Enter Name...</p>
        </div>
        <div class="chil">
            <p class="name">SURNAME:</p>
            <p class="please">Please Enter Surname...</p>
        </div>
        <div class="chil">
            <p class="name">Subject:</p>
            <p class="please">Please Enter Subject... </p>
        </div>
        <div class="chil">
            <p class="name">Email:</p>
            <p class="please">Please Enter Email</p>
        </div>
        <div class="chil">
            <p class="name">Description:</p>
            <p class="enter">Please Enter Description</p>
        </div>
        <button class="but">SUBMIT</button>
    </div>
    
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.navbar {
    background-color: #f2f2f2;
    margin-top: 100px;
    padding: 10px;
    .tso {
        font-size: 28px;
        font-weight: bold;
        border-bottom: 1px solid orange;
        margin-left: 40%;
        margin-right: 40%;
    }
    .koj {
        font-size: 18px;
        text-align: center;
        margin-top: -15px;
    }
}
.detail {
    background-color: #f2f2f2;
    margin-top: -20px;
    padding: 10px;
    .chil {
        line-height: 0.6;
        .name {
           font-weight: bold;
           margin-left: 15%;
        }
        .please {
            border: 1px solid orange;
            background-color: white;
            display: flex;
            align-items: center;
            width: 70%;
            height: 20px;
            padding: 8px;
            margin-left: 15%;     
        }
        .enter {
            border: 1px solid orange;
            background-color: white;
            display: flex;
            width:70%;
            height: 30vh;
            padding: 10px;
            margin-left: 15%;
        }
       

    }
    .but {
        color: white;
        background-color: blue;
        margin-left: 80%;
        padding: 5px 20px;
    }


}
</style>