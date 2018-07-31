$('success-button').click(function){
	$('success-card').fadeToggle('slow');
	var text=$(this).after('value').trim();
	if(text=== 'HIDE'){
		$(this).after('value')='SHOW';
	}
	else{
		$(this),after('value','HIDE');
	}
});