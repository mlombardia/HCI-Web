const _0x68cb=['handleError','length','SQLITE_ERROR:\x20','exports','search','code','message','SQLITE_ERROR','handleConstraintError','SQLITE_CONSTRAINT:\x20','../errors/errors'];(function(_0x15c3c7,_0x68cb08){const _0x542b87=function(_0x1a29ec){while(--_0x1a29ec){_0x15c3c7['push'](_0x15c3c7['shift']());}};_0x542b87(++_0x68cb08);}(_0x68cb,0xff));const _0x542b=function(_0x15c3c7,_0x68cb08){_0x15c3c7=_0x15c3c7-0x0;let _0x542b87=_0x68cb[_0x15c3c7];return _0x542b87;};const _0x3becc0=_0x542b,{DataConstraintError,DatabaseError}=require(_0x3becc0('0x8'));module[_0x3becc0('0x1')]=class RepositoryBase{[_0x3becc0('0x9')](_0x1a29ec){const _0x1ddbbf=_0x3becc0;if(_0x1a29ec[_0x1ddbbf('0x3')]===_0x1ddbbf('0x5')){let _0x2514e5=_0x1a29ec[_0x1ddbbf('0x4')];const _0x8b65e0=_0x1ddbbf('0x0'),_0xceb2c0=_0x2514e5[_0x1ddbbf('0x2')](_0x8b65e0)+_0x8b65e0[_0x1ddbbf('0xa')];return _0x2514e5=_0x2514e5['substring'](_0xceb2c0,_0x2514e5[_0x1ddbbf('0xa')]),new DatabaseError([_0x2514e5]);}else return _0x1a29ec;}[_0x3becc0('0x6')](_0x251bd7){const _0x46efff=_0x3becc0;if(_0x251bd7[_0x46efff('0x3')]==='SQLITE_CONSTRAINT'){let _0x28d563=_0x251bd7[_0x46efff('0x4')];const _0x3f742c=_0x46efff('0x7'),_0x12a911=_0x28d563['search'](_0x3f742c)+_0x3f742c[_0x46efff('0xa')];return _0x28d563=_0x28d563['substring'](_0x12a911,_0x28d563[_0x46efff('0xa')]),new DataConstraintError([_0x28d563]);}else return _0x251bd7;}};