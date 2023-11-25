document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    dropDownBtn.addEventListener('click',function(){
        dropDownList.classList.toggle('dropdown__list--visible');
    });

    dropDownListItems.forEach(function(listItem){
        listItem.addEventListener('click',function(e){
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list--visible');
        })
    })


    document.addEventListener('click', function(e){
        if (e.target !== dropDownBtn){
            dropDownList.classList.remove('dropdown__list--visible');
        }
    })

    document.addEventListener('keydown',function(e){
        if (e.key === 'Tab' || e.key === 'Escape'){
            dropDownList.classList.remove('dropdown__list--visible');
        }
    })
})






