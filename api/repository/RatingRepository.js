const _0x5f46=['length','date','offset','getFirstRatingByAttrs','count','orderBy','UserRepository','insert','exports','Rating','handleError','handleConstraintError','Routine','delete','./RoutineRepository','isArray','whereIn','getRoutineById','score','results','update','getRatings','./UserRepository','avg','limit','where','RoutineRepository','count(*)','routineId','insertRating','now','toFixed'];(function(_0x47882b,_0x5f46eb){const _0x1647bf=function(_0x44be10){while(--_0x44be10){_0x47882b['push'](_0x47882b['shift']());}};_0x1647bf(++_0x5f46eb);}(_0x5f46,0xd5));const _0x1647=function(_0x47882b,_0x5f46eb){_0x47882b=_0x47882b-0x0;let _0x1647bf=_0x5f46[_0x47882b];return _0x1647bf;};const _0x1e6306=_0x1647,RepositoryBase=require('./RepositoryBase');module[_0x1e6306('0x13')]=class RatingRepository extends RepositoryBase{constructor(_0x44be10){super(),this['db']=_0x44be10;}async['getRatingById'](_0x3a5cfc){const _0x4e8463=_0x1e6306;return this[_0x4e8463('0xe')]({'id':_0x3a5cfc});}async[_0x1e6306('0xe')](_0x33b295){const _0x296adc=_0x1e6306;try{const _0x234848=await this['getRatings'](_0x33b295,0x0,0x1),_0x16ec4e=_0x234848[_0x296adc('0x1e')];if(!Array[_0x296adc('0x1a')](_0x16ec4e)||_0x16ec4e[_0x296adc('0xb')]===0x0)return undefined;return _0x16ec4e[0x0];}catch(_0x507049){throw _0x507049;}}async[_0x1e6306('0x0')](_0x581ba2,_0x59fa60,_0x377e97,_0x53c52e=_0x1e6306('0xc'),_0xf697b4){const _0x4d2749=_0x1e6306;if(!this[_0x4d2749('0x11')]){const _0x52159f=require(_0x4d2749('0x1'));this[_0x4d2749('0x11')]=new _0x52159f(this['db']);}if(!this['RoutineRepository']){const _0x2ac926=require(_0x4d2749('0x19'));this[_0x4d2749('0x5')]=new _0x2ac926(this['db']);}try{let _0x55a449,_0xe68a5;if(Array[_0x4d2749('0x1a')](_0x581ba2['id'])){const _0x12e199=_0x581ba2['id'];delete _0x581ba2['id'],_0x55a449=await this['db'](_0x4d2749('0x14'))['whereIn']('id',_0x12e199)['where'](_0x581ba2)[_0x4d2749('0xd')](_0x59fa60)['limit'](_0x377e97)[_0x4d2749('0x10')](_0x53c52e,_0xf697b4),_0xe68a5=await this['db'](_0x4d2749('0x14'))[_0x4d2749('0x1b')]('id',_0x12e199)[_0x4d2749('0x4')](_0x581ba2)[_0x4d2749('0xf')]();}else _0x55a449=await this['db'](_0x4d2749('0x14'))['where'](_0x581ba2)['offset'](_0x59fa60)[_0x4d2749('0x3')](_0x377e97)[_0x4d2749('0x10')](_0x53c52e,_0xf697b4),_0xe68a5=await this['db'](_0x4d2749('0x14'))[_0x4d2749('0x4')](_0x581ba2)[_0x4d2749('0xf')]();for(let _0x17dc8d=0x0;_0x17dc8d<_0x55a449[_0x4d2749('0xb')];_0x17dc8d++){_0x55a449[_0x17dc8d]['routine']=await this['RoutineRepository'][_0x4d2749('0x1c')](_0x55a449[_0x17dc8d][_0x4d2749('0x7')]),delete _0x55a449[_0x17dc8d][_0x4d2749('0x7')];}return{'totalCount':_0xe68a5[0x0][_0x4d2749('0x6')],'offset':_0x59fa60,'limit':_0x377e97,'orderBy':_0x53c52e,'direction':_0xf697b4,'results':_0x55a449};}catch(_0x4fa8d6){super[_0x4d2749('0x15')](_0x4fa8d6);}}async[_0x1e6306('0x8')](_0x2cd7a3,_0x196e50){const _0x4804df=_0x1e6306;try{const {user:_0x1fd8d1,score:_0x47aab8,review:_0x4df7cc}=_0x196e50,_0x20db5f=await this['db'](_0x4804df('0x14'))[_0x4804df('0x12')]({'routineId':_0x2cd7a3,'userId':_0x1fd8d1['id'],'score':_0x47aab8,'review':_0x4df7cc,'date':Date[_0x4804df('0x9')]()});if(!_0x20db5f)return undefined;return await this['getRatingById'](_0x20db5f);}catch(_0x3509eb){super[_0x4804df('0x16')](_0x3509eb);}}async['deleteRating'](_0x51e2ab){const _0x1207ae=_0x1e6306;try{return await this['db'](_0x1207ae('0x14'))[_0x1207ae('0x4')]({'id':_0x51e2ab})[_0x1207ae('0x18')]();}catch(_0x4b8afc){super['handleError'](_0x4b8afc);}}async['calculateRating'](_0x3b2c60){const _0x14e828=_0x1e6306;try{const _0x933f77=await this['db'](_0x14e828('0x14'))[_0x14e828('0x2')]({'avg':_0x14e828('0x1d')})[_0x14e828('0x4')]({'routineId':_0x3b2c60});await this['db'](_0x14e828('0x17'))[_0x14e828('0x4')]({'id':_0x3b2c60})[_0x14e828('0x1f')]({'averageRating':_0x933f77[0x0]['avg'][_0x14e828('0xa')](0x2)});}catch(_0x2b135b){super[_0x14e828('0x15')](_0x2b135b);}}};