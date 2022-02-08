<template>

  <div id="stopwatch">
    <div>
    <h1>StopWatch</h1>
    
     {{ time }}       <!--mustache-->
    
    </div>
<button v-on:click="btn1">시작</button>
<button v-on:click="btn2">멈춤</button>

</div>
</template>



<script>
 export default {
     data () {
         return {
             state:"started",
             startTime:Date.now(),
             currentTime:Date.now(),
             stopDuration:0,
             timeStopped:0,
             interval:0,
            
         }
     },

     
         mounted: function() {
            this.interval = setInterval(this.updateCurrentTime, 30); //setInterval 새로고침
        },
        destroyed: function() {
            clearInterval(this.interval)
        },

         computed: {
            time : function() {
                return this.hours + ':' + this.minutes + ':' + this.seconds + ':' + this.mic;
            },
            milliseconds: function() {
                return this.currentTime - this.$data.startTime;              
            },
            hours: function() {
                var lapsed = this.milliseconds;
                var hrs = Math.floor((lapsed / 1000 / 60 / 60));
                return hrs >= 10 ? hrs : '0' + hrs;
            },
            minutes: function() {
                var lapsed = this.milliseconds;
                var min = Math.floor((lapsed / 1000 / 60) % 60); // 같거나 가장 큰 정수 반환 함수
                return min >= 10 ? min : '0' + min;
            },
            seconds: function() {
                var lapsed = this.milliseconds;
                var sec = Math.ceil((lapsed / 1000) % 60); //ceil 소수점 이하 반올림 함수
                return sec >= 10 ? sec : '0' + sec;
            },
            mic: function() {
                return parseInt((this.milliseconds%1000)/10); //밀리초까지 표현하고 1000분의1초 버리기
            }
            
        
            
        },

     methods: {
        btn1: function(){
            this.$data.state = "started";
            this.$data.startTime = Date.now();
            this.$data.currentTime = Date.now();
            this.stopDuration +=(new Date.now()- this.timeStopped);

        

        },
        
        btn2: function() {
                this.$data.state = "paused";
                this.timeStopped = new Date.now();
                

            },
            
            
            resume: function() {
                this.$data.state = "started";
            },
            updateCurrentTime: function() {
                if (this.$data.state == "started") {
                    this.currentTime = Date.now();
                }
            }        

            }
        }
     
 
</script>










<style scoped>


</style>