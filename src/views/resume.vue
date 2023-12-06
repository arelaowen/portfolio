<template>
    <dv>
        <v-app-bar :class="`mt-2 ${isMobile ? '':'mx-6'}`" dense elevation="0" color="transparent" dark id="home"> 
        <span>
            <span class="text-h4">{ }</span>
            <span class="text-caption">wen</span>
        </span>
        <v-spacer/>
            <div>
                <v-btn text @click="download()">Download CV</v-btn>
                <v-btn text @click="$router.push({path: '/'})">Home</v-btn>
            </div>
        </v-app-bar>
        <v-container style="height: 1100px;">
            <iframe src="resume.pdf#toolbar=0" width="100%" height="100%"/>
        </v-container>
    </dv>
</template>

<script>
export default {
    methods: {
        download(){
            var link = document.createElement('a');
            link.href = 'resume.pdf';
            link.download = 'RAFAEL OWEN ARELA - RESUME.pdf';
            link.dispatchEvent(new MouseEvent('click'));
        }
    }
}
</script>
