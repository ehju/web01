function nightDayHandler(self) {
	var target = document.querySelector('body');
	if (self.value === 'NightMode') {
		target.style.backgroundColor = 'black';
		target.style.color = 'white';
		document.querySelector('.title').style.borderBottomColor = 'white';
		self.value = 'DayMode';
		self.style.color = 'white';
		var alist = document.querySelectorAll('a');
		var i = 0;
		while (i < alist.length) {
			alist[i].style.color = 'white';
			i = i + 1;
		}
		self.style.backgroundColor = 'blue';
	} else {
		target.style.backgroundColor = 'white';
		target.style.color = 'black';
		document.querySelector('.title').style.borderBottomColor = 'black';
		self.value = 'NightMode';
		self.style.color = '';
		self.style.backgroundColor = '';
		var alist = document.querySelectorAll('a');
		var i = 0;
		while (i < alist.length) {
			alist[i].style.color = 'black';
			i = i + 1;
		}
	}
}