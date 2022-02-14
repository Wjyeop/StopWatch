<template>

  <div id="StopWatch">
		
		
    <div class="m-3" >
    <h1>StopWatch</h1>
	<div class="m-3">
    {{ hours }}:{{ minutes }}:{{ seconds }}.{{ milisec }}   <!--mustache-->
	</div>
    </div>

<div>
    <b-button 
    class="m-1"
    variant="primary" id="btnid1" v-on:click="btn1">{{ btn1Text }}
    </b-button>

    <b-button
    class="m-1"
		variant="secondary" id="btnid2" v-on:click="btn2">{{ btn2Text }}
    </b-button>
</div>
<div>
<ul>
  <li v-for="(item, index) in timelog"
    :key="index"
  >
  {{ index+1 + "번 기록" }} : {{  getTimeLog(item) }}
  
  </li>
</ul>

</div>
</div>
</template>



<script>

export default {
    data () {
        return {
            btn1Text:'시작',
            btn2Text:'기록',
            state:"ready",
            timelog: [],
            timerId:0, //setInterval startTimer function 호출 변수
            time:0,
            startedTime:0,
            stopWatchTime:0,
						stopDuration:0,
						i:0
						
        }
    },
    

     computed: {


        hours: function() {
							var hor = Math.floor((this.stopWatchTime / (1000 * 60 * 60)) % 24)
            return hor >=10 ? hor: '0' + hor;
        },
        minutes: function() {
							var min = Math.floor((this.stopWatchTime / (1000 * 60)) % 60)
            return min >=10 ? min: '0' + min;        
        },
        seconds: function() {
							var sec = Math.floor((this.stopWatchTime / 1000) % 60);
						return sec >=10 ? sec: '0' + sec;
        }, 
        milisec: function() {
            var milisec = parseInt((this.stopWatchTime%1000)/10);
            return milisec >=10 ? milisec: '0' + milisec;
        }
	

     },
     methods: {


         btn1: function(){

							if(this.state=="ready"){ // 시작
              this.start()
             }
							else if(this.state=="started"){ //멈춤
              this.stop()
             }
							// else if(this.state=="stopped"){
							// this.resume()
							// }
         },
         
         btn2: function(){
             if(this.state=="started"){ //기록
                this.measure()
             }
             else if(this.state=="stopped"){ //초기화
								this.reset()
             }
         },
			
			
			
			
         updateTime ()  {   //경과시간을 측정한다.
						this.stopWatchTime = Date.now() - this.startedTime						
         },
         start () {
            this.startedTime = Date.now()
            this.startTimer()
            this.state="started"
            this.btn1Text ='멈춤'
         },
         
					startTimer () {
             this.timerId = setInterval(this.updateTime, 30)
         },
					stopTimer() {
             clearInterval(this.timerId)
         },
					stop () {
            this.stopTimer()
						this.state="stopped"
						this.btn1Text ='시작'
						this.btn2Text ='초기화'
         },
          getTimeLog(measuedTimedMillis) {
							var hor = Math.floor((measuedTimedMillis / (1000 * 60 * 60)) % 24)
							var min = Math.floor((measuedTimedMillis / (1000 * 60)) % 60)
							var sec = Math.floor((measuedTimedMillis / 1000) % 60);
              var milisec = parseInt((measuedTimedMillis % 1000)/10);
              return (hor >=10 ? hor: '0' + hor )
              + ':' 
              +(min >=10 ? min: '0' + min)
              + ':'
              + (sec >=10 ? sec: '0' + sec)
              + '.'
              + (milisec >=10 ? milisec: '0' + milisec)
        },
					measure() {  //요청시점에 기록을 측정한다. 
						const measuredTimeMillis = (Date.now() - this.startedTime)		
            this.timelog.push(measuredTimeMillis)
         },
					
					reset() {
						this.state="ready"
						this.stopWatchTime=0
						this.btn1Text ='시작'
						this.btn2Text ='기록'
						this.timelog=0
						console.clear()
						this.timelog=[]
						this.i=0
         }
					// resume () {
					// 	this.stopDuration = Date.now() - this.stoppedTime		
					// 	this.startTimer()										
					// 	this.state="started"
					// 	this.btn1Text ='멈춤'
          //},

        
     }
}
</script>



<style scoped>
</style>