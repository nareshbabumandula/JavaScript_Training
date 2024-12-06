module.exports={
    default:{
        require:['./features/step-definitions/saucedemo.steps.js'],
        format:['html:cucumber-report.html', 'progress'],
        parallel:0,
        publishQuite: true
    },
};