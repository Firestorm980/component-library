import Accordion from './accordion';

export { Accordion };

if (typeof window.TenUp !== 'object') {
	window.TenUp = {};
}

window.TenUp.Accordion = Accordion;