function logger(log) {
    if (typeof (log) === 'undefined') {
        console.log('Gia tri mac dinh');
    }
    console.log(log);
}

logger('hi!')

function logger1(log, type = 'log') {
    console[type](log);
}

logger1('Danger!...', 'warn')