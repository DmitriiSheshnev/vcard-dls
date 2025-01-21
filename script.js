$(document).ready(function(){
	$('body').on('click', '.vcard__btn', function(){
		var addressFull = 'ADR;TYPE=WORK;CHARSET=utf-8:;;',
			head='BEGIN:VCARD\n';
			head += 'VERSION:3.0\n';
				$('[data-name]').each(function(){
					var valThis = $(this).text(),
						keyThis = $(this).data('name');
					head += keyThis+':'+valThis+'\n';
				})
				
				$('.vcard__block--left .vcard__line').each(function(){
					addressFull += $(this).text()+';';
				})
				head += addressFull+'\n';
			head += 'END:VCARD';
		console.log(head);
		var data = new Blob([head], {type: "text/x-vcard;;charset=utf-8"});
		saveAs(data, $('.vcard__title--name').text()+".vcf");
	})
})