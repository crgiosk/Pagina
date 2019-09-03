$('#formulario').submit(function(e){
    alert("Elemtos del js: "+$(this).serialize());
    e.preventDefault();
});