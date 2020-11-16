if (window.location.hash === '#express') {
    require('./express')
}
else {
    require('./renderer')
}