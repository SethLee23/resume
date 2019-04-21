
//立即執行函數
!function(){
    let markTags = document.querySelectorAll('[data-x]')
for (i = 0; i < markTags.length; i++) {
    markTags[i].classList.add('offset')
}
findClosestAndRemoveOffset()
window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffset()
})

function findClosestAndRemoveOffset() {
    let markTags = document.querySelectorAll('[data-x]')//注意标记的写法
    let minIndex = 0
    let currentY = window.scrollY
    for (i = 1; i < markTags.length; i++) {
        if (Math.abs(markTags[i].offsetTop - currentY) < Math.abs(markTags[minIndex].offsetTop - currentY)) {
            minIndex = i

        }
    }
    markTags[minIndex].classList.remove('offset')


    let id = markTags[minIndex].id
    let a = document.querySelector('a[href = "#' + id + '"]')
    let li = a.parentNode
    let siblings = li.parentNode.children
    for (i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}
}.call()