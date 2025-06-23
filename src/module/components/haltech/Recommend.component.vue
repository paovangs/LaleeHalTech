<script setup lang="ts">

</script>

<template>
    <div class="Recommend ">
        <div class="quick">
            <p class="service">Recommend Our New service</p>
            <img src="https://haltech.la/assets/Bh-qYaIN-quick-site.webp" alt="">
            <p class="stand">Stand our your business faster than ever</p>
            <span class="button">
                <button>></button>
                Low-cost Barrier
                <button>></button>
                Faster Time-to-Market
                <button>></button>
                Scalability

            </span>
            
            <h2>
                We’ve got perfect
                <span> plan</span>
                for you
            </h2>
        </div>

        <div class="box-colums">
            <div class="colums">
                <div class="Personal">
                   <button>0</button>
                   <h3>Personal</h3>
                   <p class="stystem">System analysis package</p>
                   <h1>$199</h1>
                   <p class="Contact">Contact Us</p>
                </div>
                <div class="Analysis">
                    <p>
                       <button>></button>
                        <span>Analysis and Evaluation</span>
                    </p>
                    <p>
                      <button>></button>
                      <span>Design Based on Customer Needs</span>
                    </p>
                    <p>
                       <button>></button>
                      <span>UI Wireframe for Main Page</span>
                    </p>
                    <p>
                        <button>></button>
                        <span>Pricing and Quotation Design</span>
                    </p>
                    <h4>Refund Policy</h4>
                    <p class="button">
                       <button>o</button>
                      <span>If you proceed with further development, the system analysis fee will be fully refunded.</span>
                    </p>
                    <p>
                       <button>o</button>
                       <span>If no further developments are pursued, 50% of the system analysis fee will be refunded.</span>
                    </p>
                </div>
            </div>
            <div class="colums">
                <div class="Personal">
                  <button>0</button>
                   <h3>Standard</h3>
                   <p class="stystem">Information website package</p>
                   <h1>$1,200</h1>
                   <p class="Cont">Contact Us</p>
                </div>
                <div class="Analysis">
                    <p>
                      <button>></button>
                       <span>Analysis and Evaluation</span>
                    </p>
                    <p>
                       <button>></button>
                       <span>Design Based on Customer Needs</span>
                    </p>
                    <p>
                        <button>></button>
                       <span>UI Wireframe for Main Page</span>
                    </p>
                    <p>
                       <button>></button>
                        <span>Pricing and Quotation Design</span>
                    </p>
                  
                </div>
            </div>
            <div class="colums">
                <div class="Personal">
                  <button>0</button>
                   <h3>Pro</h3>
                   <p class="stystem">E-commerce website package</p>
                   <h1>$4,900</h1>
                   <p class="Contact">Contact Us</p>
                </div>
                <div class="Analysis">
                    <p>
                      <button>></button>
                       <span>Information Website Development</span>
                    </p>
                    <p>
                       <button>></button>
                       <span>Website Pages Included (Home page, About us page, contact us page, Portfolio page, New page)</span>
                    </p>
                    <p>
                        <button>></button>
                       <span>Banner Design (5 Pages)</span>
                    </p>
                    <p>
                       <button>></button>
                        <span>Website Pages Included (Add Users (Unlimited), User Permissions, Content Management (Add Information), Add Banners)</span>
                    </p>
                   
                </div>
            </div>


        </div>


    </div>

</template>

<style lang="scss" scoped>
.Recommend {
    background-color: black;
    padding: 10px 50px;
    .quick {
        text-align: center;
        .service {
            border: 1px solid white;
            background-color: white;
            padding: 5px;
            border-radius: 20px;
            width:20%;
            font-size: 18px;
        }
        .stand {
            font-size: 23px;
            color: white;
        }
        .button {
            color: white;
            font-size: 18px;
            line-height: 0.5;
            & button {
               border-radius: 100%;
               padding: 0 8px;
               margin: 0 20px;
            }
        }
        & h2 {
            color: white;
            & span {
                color: rgb(50, 50, 141);
            }
        }  
    }
    .box-colums {
        grid-template-columns: repeat(3, 1fr);
        display: grid;
        gap: 20px;

        .colums {
           border: 1px solid white;
           border-radius: 20px;
           grid-template-columns: repeat(3, 1fr);
           background-color: white;
           padding: 20px;
           .Personal {
                & button {
                   border-radius: 100%;
                   padding: 0 8px;
                   margin: 0 20px;
                   background-color: rgb(171, 171, 240);
                }
                & h3 {
                  font-size: 23px;
                  line-height: 0.2;
                }
                & h1 {
                    line-height: 0.5;
                }
               .stystem {
                  font-size: 20px;
                }
               .Contact {
                   font-size: 20px;
                   width: 25%;
                   text-align: center;
                   padding: 10px;
                   border: 1px solid black;
                   border-radius: 40px;
                   width: 80%;
                   &:hover {
                        border: 1px solid black;
                        background: black;
                        color: white;
                        border-radius: 20px;
                    }
                }
                .Cont {
                    font-size: 20px;
                   width: 25%;
                   text-align: center;
                   padding: 10px;
                   border: 1px solid  rgb(122, 122, 243);
                   border-radius: 40px;
                   width: 80%;
                   background-color: rgb(122, 122, 243);
                   color: white;
                }
   
            } 
            .Analysis {
                & button {
                   border-radius: 100%;
                   padding: 0 8px;
                    margin: 0 20px;
                    background-color: black;
                   color: white;
                }
                & span {
                  color: #686568;
                  font-size: 14px;
                  line-height: 0.5;
                }
                & h4 {
                  font-size: 25px;
                  color: rgb(82, 82, 214);
                }
                .button {
                    line-height: 0.5;
                    margin-top: -20px;
                }
            }     
        }      
    }


}


</style>