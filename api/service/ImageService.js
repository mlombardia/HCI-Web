const _0x1bc5=['getImages','findSingleExerciseImage','Exercise\x20id\x20',')\x20not\x20found','User\x20is\x20not\x20creator\x20of\x20routineId\x20','build',')))\x20not\x20found','log','getExerciseByIds','Image\x20id\x20','))\x20not\x20found','\x20not\x20found','offset','insertImage','creator','\x20(cycle\x20id\x20','deleteExerciseImage','./../errors/errors','getCycleByIds','addExerciseImage','Cycle\x20id\x20','\x20(routine\x20id\x20','updateExerciseImage','getRoutineById','Routine\x20id\x20','\x20(exercise\x20id\x20'];(function(_0x2fa4ef,_0x1bc50f){const _0x57da45=function(_0x216979){while(--_0x216979){_0x2fa4ef['push'](_0x2fa4ef['shift']());}};_0x57da45(++_0x1bc50f);}(_0x1bc5,0xef));const _0x57da=function(_0x2fa4ef,_0x1bc50f){_0x2fa4ef=_0x2fa4ef-0x0;let _0x57da45=_0x1bc5[_0x2fa4ef];return _0x57da45;};const _0x32e482=_0x57da;'use strict';const {PagedResult}=require('./../utils/PagedResult'),{NotFoundError,ForbiddenError}=require(_0x32e482('0xc'));exports[_0x32e482('0xe')]=async(_0x216979,_0x2f0196,_0x2ab956,_0x1f65f3,_0x26377a,_0x5a2445)=>{const _0x2cab5e=_0x32e482;try{const {ExerciseRepository:_0x681428,CycleRepository:_0x5b45c2,RoutineRepository:_0x4063a2,ImageRepository:_0xe6016f}=_0x216979,_0x37c6a9=await _0x4063a2[_0x2cab5e('0x12')](_0x2ab956);if(!_0x37c6a9)throw new NotFoundError([_0x2cab5e('0x13')+_0x2ab956+_0x2cab5e('0x6')]);if(_0x37c6a9[_0x2cab5e('0x9')]['id']!==_0x2f0196['id'])throw new ForbiddenError([_0x2cab5e('0x19')+_0x2ab956]);const _0x39573c=await _0x5b45c2[_0x2cab5e('0xd')](_0x2ab956,_0x1f65f3);if(!_0x39573c)throw new ForbiddenError([_0x2cab5e('0xf')+_0x1f65f3+_0x2cab5e('0x10')+_0x2ab956+_0x2cab5e('0x18')]);const _0x2c4012=await _0x681428[_0x2cab5e('0x3')](_0x1f65f3,_0x26377a);if(!_0x2c4012)throw new ForbiddenError([_0x2cab5e('0x17')+_0x26377a+_0x2cab5e('0xa')+_0x1f65f3+_0x2cab5e('0x10')+_0x2ab956+_0x2cab5e('0x5')]);return await _0xe6016f[_0x2cab5e('0x8')](_0x26377a,_0x5a2445);}catch(_0xc3d4f5){throw _0xc3d4f5;}},exports[_0x32e482('0xb')]=async(_0x18f952,_0x58873d,_0x27d9d5,_0x4e2819,_0x3587fb,_0x54a97e)=>{const _0x1d96cb=_0x32e482;try{const {ExerciseRepository:_0x18acf0,CycleRepository:_0x537961,RoutineRepository:_0x416f86,ImageRepository:_0x428a9c}=_0x18f952,_0x3f1e25=await _0x416f86[_0x1d96cb('0x12')](_0x27d9d5);if(!_0x3f1e25)throw new NotFoundError([_0x1d96cb('0x13')+_0x27d9d5+_0x1d96cb('0x6')]);if(_0x3f1e25[_0x1d96cb('0x9')]['id']!==_0x58873d['id'])throw new ForbiddenError([_0x1d96cb('0x19')+_0x27d9d5]);const _0x57e7f7=await _0x537961[_0x1d96cb('0xd')](_0x27d9d5,_0x4e2819);if(!_0x57e7f7)throw new NotFoundError(['Cycle\x20id\x20'+_0x4e2819+_0x1d96cb('0x10')+_0x27d9d5+_0x1d96cb('0x18')]);const _0x149ea6=await _0x18acf0[_0x1d96cb('0x3')](_0x4e2819,_0x3587fb);if(!_0x149ea6)throw new NotFoundError([_0x1d96cb('0x17')+_0x3587fb+'\x20(cycle\x20id\x20'+_0x4e2819+_0x1d96cb('0x10')+_0x27d9d5+_0x1d96cb('0x5')]);const _0x343e3f=await _0x428a9c['getImageByIds'](_0x3587fb,_0x54a97e);if(!_0x343e3f)throw new NotFoundError(['Image\x20id\x20'+_0x54a97e+_0x1d96cb('0x14')+_0x3587fb+_0x1d96cb('0xa')+_0x4e2819+_0x1d96cb('0x10')+_0x27d9d5+_0x1d96cb('0x1')]);await _0x428a9c['deleteImage'](_0x54a97e);}catch(_0x43a240){throw _0x43a240;}},exports['findExerciseImages']=async(_0x4d3752,_0x7a1bea,_0x1cd0cf,_0x53125e,_0x355453,_0x36b8d2,_0xedb69d,_0x2b815d)=>{const _0x3d422b=_0x32e482;try{const {ExerciseRepository:_0x239874,CycleRepository:_0x4623b9,RoutineRepository:_0x5396e2,ImageRepository:_0x1c6624}=_0x4d3752,_0x399b4e=await _0x5396e2[_0x3d422b('0x12')](_0x7a1bea);if(!_0x399b4e)throw new NotFoundError([_0x3d422b('0x13')+_0x7a1bea+'\x20not\x20found']);const _0x5c4ee8=await _0x4623b9[_0x3d422b('0xd')](_0x7a1bea,_0x1cd0cf);if(!_0x5c4ee8)throw new NotFoundError([_0x3d422b('0xf')+_0x1cd0cf+_0x3d422b('0x10')+_0x7a1bea+_0x3d422b('0x18')]);const _0x4791ba=await _0x239874['getExerciseByIds'](_0x1cd0cf,_0x53125e);if(!_0x4791ba)throw new NotFoundError([_0x3d422b('0x17')+_0x53125e+_0x3d422b('0xa')+_0x1cd0cf+_0x3d422b('0x10')+_0x7a1bea+_0x3d422b('0x5')]);let _0x7b47dd={'exerciseId':_0x53125e};const _0x49fc77=PagedResult['limit'](_0x36b8d2),_0x5efc03=PagedResult[_0x3d422b('0x7')](_0x355453,_0x49fc77);let _0x3d3c57=await _0x1c6624[_0x3d422b('0x15')](_0x7b47dd,_0x5efc03,_0x49fc77,_0xedb69d,_0x2b815d);return PagedResult[_0x3d422b('0x0')](_0x3d3c57);}catch(_0x287e6e){console[_0x3d422b('0x2')](_0x287e6e);throw _0x287e6e;}},exports[_0x32e482('0x16')]=async(_0x1b1bf9,_0x3ee945,_0x5e65fd,_0x2790a6,_0x2c0396)=>{const _0x4590a1=_0x32e482;try{const {ExerciseRepository:_0x17b275,CycleRepository:_0x5da300,RoutineRepository:_0x2e6ce6,ImageRepository:_0x4c327b}=_0x1b1bf9,_0x63e1e5=await _0x2e6ce6['getRoutineById'](_0x3ee945);if(!_0x63e1e5)throw new NotFoundError([_0x4590a1('0x13')+_0x3ee945+_0x4590a1('0x6')]);const _0x21d197=await _0x5da300[_0x4590a1('0xd')](_0x3ee945,_0x5e65fd);if(!_0x21d197)throw new NotFoundError([_0x4590a1('0xf')+_0x5e65fd+_0x4590a1('0x10')+_0x3ee945+_0x4590a1('0x18')]);const _0x5b496a=await _0x17b275['getExerciseByIds'](_0x5e65fd,_0x2790a6);if(!_0x5b496a)throw new NotFoundError([_0x4590a1('0x17')+_0x2790a6+_0x4590a1('0xa')+_0x5e65fd+'\x20(routine\x20id\x20'+_0x3ee945+_0x4590a1('0x5')]);const _0x1a4e40=await _0x4c327b['getImageByIds'](_0x2790a6,_0x2c0396);if(!_0x1a4e40)throw new NotFoundError(['Image\x20id\x20'+_0x2c0396+_0x4590a1('0x14')+_0x2790a6+_0x4590a1('0xa')+_0x5e65fd+_0x4590a1('0x10')+_0x3ee945+_0x4590a1('0x1')]);return _0x1a4e40;}catch(_0x550f0e){throw _0x550f0e;}},exports[_0x32e482('0x11')]=async(_0x25aa33,_0x7e956b,_0x58340d,_0x3a9bf2,_0x3e3c8a,_0x6f61a7,_0x1de6a8)=>{const _0x37bae1=_0x32e482;try{const {ExerciseRepository:_0x4d595e,CycleRepository:_0x2e0552,RoutineRepository:_0x1072d1,ImageRepository:_0xb8f58f}=_0x25aa33,_0xcb3c7b=await _0x1072d1['getRoutineById'](_0x58340d);if(!_0xcb3c7b)throw new NotFoundError([_0x37bae1('0x13')+_0x58340d+'\x20not\x20found']);if(_0xcb3c7b[_0x37bae1('0x9')]['id']!==_0x7e956b['id'])throw new ForbiddenError(['User\x20is\x20not\x20creator\x20of\x20routineId\x20'+_0x58340d]);const _0x5f2c9e=await _0x2e0552[_0x37bae1('0xd')](_0x58340d,_0x3a9bf2);if(!_0x5f2c9e)throw new NotFoundError(['Cycle\x20id\x20'+_0x3a9bf2+_0x37bae1('0x10')+_0x58340d+_0x37bae1('0x18')]);const _0x95431d=await _0x4d595e[_0x37bae1('0x3')](_0x3a9bf2,_0x3e3c8a);if(!_0x95431d)throw new NotFoundError([_0x37bae1('0x17')+_0x3e3c8a+_0x37bae1('0xa')+_0x3a9bf2+_0x37bae1('0x10')+_0x58340d+_0x37bae1('0x5')]);const _0x1c34cb=await _0xb8f58f['getImageByIds'](_0x3e3c8a,_0x6f61a7);if(!_0x1c34cb)throw new NotFoundError(['Image\x20id\x20'+_0x6f61a7+'\x20(exercise\x20id\x20'+_0x3e3c8a+_0x37bae1('0xa')+_0x3a9bf2+_0x37bae1('0x10')+_0x58340d+_0x37bae1('0x1')]);const _0x4806fe=await _0xb8f58f['updateImage'](_0x6f61a7,_0x1de6a8);if(!_0x4806fe)throw new NotFoundError([_0x37bae1('0x4')+_0x6f61a7+_0x37bae1('0x14')+_0x3e3c8a+_0x37bae1('0xa')+_0x3a9bf2+'\x20(routine\x20id\x20'+_0x58340d+_0x37bae1('0x1')]);return _0x4806fe;}catch(_0x43cced){throw _0x43cced;}};