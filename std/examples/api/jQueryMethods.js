


const jQueryMethods = {

	// Array listing all jQuery 3.2.1 method names
	names : [
	'length', 'toArray', 'get',
	'each', 'map', 'slice', 'first', 'last',
	'end', 'push', 'sort', 'splice', 'extend',
	'filter', 'not', 'is', 'init', 'has',
	'index', 'add', 'addBack', 'parent', 'parents',
	'next', 'prev', 'nextAll', 'prevAll', 'nextUntil',
	'siblings', 'children', 'contents', 'ready', 'data',
	'queue', 'dequeue', 'clearQueue', 'promise', 'show',
	'toggle', 'on', 'one', 'off', 'detach',
	'text', 'append', 'prepend', 'before', 'after',
	'clone', 'html', 'replaceWith', 'appendTo', 'prependTo',
	'insertAfter', 'replaceAll', 'css', 'fadeTo', 'animate',
	'finish', 'slideDown', 'slideUp', 'slideToggle', 'fadeIn',
	'fadeToggle', 'delay', 'attr', 'removeAttr', 'prop',
	'addClass', 'removeClass', 'toggleClass', 'hasClass', 'val',
	'triggerHandler', 'blur', 'focus', 'focusin', 'focusout',
	'scroll', 'click', 'dblclick', 'mousedown', 'mouseup',
	'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change',
	'submit', 'keydown', 'keypress', 'keyup', 'contextmenu',
	'serialize', 'serializeArray', 'wrapAll', 'wrapInner', 'wrap',
	'load', 'ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError',
	'ajaxSend', 'offset', 'position', 'offsetParent', 'scrollLeft',
	'innerHeight', 'height', 'outerHeight', 'innerWidth', 'width',
	],

	list: ((owner)=>{
		const el = ((tag,html)=>{
			if (html) {
				const e = el(tag);
				e.innerHTML = html;
				return e;
			}
			return document.createElement(tag);
		})
		const css = ((e,name)=>{
			e.setAttribute('class',name);
			return e;
		})
		const add = ((e,p)=>{
			(p?p:document.body).appendChild(
				css(e,'kewlClass')
			);
			return e;
		})
		const fieldset = el('fieldset');
		add(el('legend','jQuery'),fieldset);
		const names = jQueryMethods.names.sort();
		names.forEach(n=>{
			add(el('button',n),fieldset)
		});
		return add(fieldset,owner);
	})

};

console.log( "Loaded jQueryMethods.js API Module" );

