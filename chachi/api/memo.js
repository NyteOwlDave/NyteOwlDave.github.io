
/* 
    Chachi Saved Script ~ Omega
    2025-AUG-09
    SIP Memo Operations

- [Omega](file:///home/dave/Mount/MORPHEUS/)

*/


sip.memoSave = () => { sip.memo  = sip.value; return sip; };
sip.memoLoad = () => { sip.value = sip.memo;  return sip; };
sip.memoSwap = () => {
	const tmp = sip.value
	sip.memoLoad().memo = temp;
	return sip;  
};

"Loaded SIP Memo Operations";

