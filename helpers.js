$('#formulario').submit(function(e){
    alert("Elemtos del formulario: "+$(this).serialize());
    e.preventDefault();
});