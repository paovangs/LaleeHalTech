<script setup lang="ts">

</script>

<template>
    <div class="box-blog">
        <div class="blog">
            <p>Blog</p>
            <h2>Activities and CSR</h2>
        </div>
        <div class="box-colums">
            <div class="colums">
                <img src="https://haltech.la/blog/haltech-sharing.webp" alt="">
                <div class="Haltech">
                    <h2>Haltech sharing</h2>
                    <p>The development of a website backend system with Restful API using PHP (Laravel Framework).</p>
                    <button>Continue readnnig</button>
                </div>
            </div>

            <div class="colums">
                <img src="https://haltech.la/blog/4-advantages-with-flutter.webp" alt="">
                <div class="Haltech">
                    <h2>4 advantages with Flutter</h2>
                    <p>For anyone who is starting to learn how to build applications, today we will share 4 advantages of building an application with Flutter.</p>
                    <button>Continue readnnig</button>
                </div>
            </div>
            <div class="colums">
                <img src="https://haltech.la/blog/the-term-c-i-a.webp" alt="">
                <div class="Haltech">
                    <h2> the term C-I-A?</h2>
                    <p>C-I-A refers to the essential elements in data security, helping us ensure the protection of sensitive information.</p>
                    <button>Continue readnnig</button>
                </div>
            </div>



        </div>
    </div>
</template>

<style lang="scss" scoped>
.box-blog {
    padding: 10px 50px;
    margin-top: 80px;
    .blog {
        line-height: 0.5;
        & h2 {
            font-size: 28px;
            font-weight: bold;  
        }
    }
    .box-colums {
        grid-template-columns: repeat(3, 1fr);
        display: flex;
        justify-content: center;
        gap: 40px;
        .colums {
            width: 40%;

            & img {
                height: 50vh;
                width: 100%;
                border-radius: 10px 10px 0 0;

            }
            .Haltech {
                padding: 10px 30px;
                margin-top: -10px;
                border-radius: 0 00 10px 10px;
                // border: 1px solid green;
                & h2 {
                    font-size: 28px;
                    font-weight: bold;
                }
                & p {
                    font-size: 18px;
                    margin-top: -20px;
                }
                & button {
                    border: 1px solid black;
                    border-radius: 25px;
                    margin-left: 45% ;
                    &:hover {
                        background-color: black;
                        color: white;
                    }
                }
                &:hover {
                    box-shadow: 0 0 10px 5px #f0e5e5;

                }
            }
           
        }
    }
}

</style>