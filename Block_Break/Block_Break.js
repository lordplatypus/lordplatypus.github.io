(()=>{"use strict";var t,e=function(){function t(){this.gameobjects_=[]}return t.prototype.Update=function(t){for(var e=0;e<this.gameobjects_.length;e++)this.gameobjects_[e].Update(t)},t.prototype.Draw=function(t){for(var e=0;e<this.gameobjects_.length;e++)this.gameobjects_[e].Draw(t)},t.prototype.Add=function(t){this.gameobjects_.push(t)},t.prototype.RemoveDead=function(){for(var t=0;t<this.gameobjects_.length;)this.gameobjects_[t].Dead?(delete this.gameobjects_[t],this.gameobjects_.splice(t,1)):t++},t.prototype.SearchByName=function(t){for(var e=0;e<this.gameobjects_.length;e++)if(this.gameobjects_[e].Name===t)return this.gameobjects_[e];return null},t.prototype.SearchByTag=function(t){for(var e=0;e<this.gameobjects_.length;e++)if(this.gameobjects_[e].Tag===t)return this.gameobjects_[e];return null},t.prototype.SearchByID=function(t){for(var e=0;e<this.gameobjects_.length;e++)if(this.gameobjects_[e].ID===t)return this.gameobjects_[e];return null},t.prototype.Clear=function(){this.gameobjects_=[]},t}(),o=function(){function t(t,e){this.x_=t,this.y_=e}return Object.defineProperty(t.prototype,"x",{get:function(){return this.x_},set:function(t){this.x_=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.y_},set:function(t){this.y_=t},enumerable:!1,configurable:!0}),t}(),n=function(){function t(){this.name_="",this.tag_="",this.ID_=0,this.position_=new o(0,0),this.isDead_=!1}return t.prototype.Update=function(t){},t.prototype.Draw=function(t){},Object.defineProperty(t.prototype,"Name",{get:function(){return this.name_},set:function(t){this.name_=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Tag",{get:function(){return this.tag_},set:function(t){this.tag_=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ID",{get:function(){return this.ID_},set:function(t){this.ID_=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Dead",{get:function(){return this.isDead_},set:function(t){this.isDead_=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Position",{get:function(){return this.position_},set:function(t){this.position_=t},enumerable:!1,configurable:!0}),t}(),i=(t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)},function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),s=function(t){function e(e,n,i,s,r,c,h,a,u){var l=t.call(this)||this;return l.scene_=e,l.name_=n,l.tag_=i,l.ID_=s,l.position_=new o(r.x,r.y),l.targetPosition_=new o(r.x,r.y),l.size_=c,l.color_=h,l.columns_=a,l.rows_=u,l}return i(e,t),e.prototype.Update=function(t){this.targetPosition_.x===this.position_.x&&this.targetPosition_.y===this.position_.y||(this.position_.x-this.targetPosition_.x<.01&&(this.position_.x=this.targetPosition_.x),this.targetPosition_.y-this.position_.y<.01&&(this.position_.y=this.targetPosition_.y),this.position_=this.Lerp(this.position_,this.targetPosition_,10*t))},e.prototype.Draw=function(t){null!==t&&(t.fillStyle=this.color_,t.fillRect(this.position_.x,this.position_.y,this.size_.x,this.size_.y))},e.prototype.Translate=function(t,e){this.targetPosition_=new o(t.x,t.y),this.ID_=e},e.prototype.Lerp=function(t,e,o){var n=t;return n.x=(1-o)*t.x+o*e.x,n.y=(1-o)*t.y+o*e.y,n},Object.defineProperty(e.prototype,"Color",{get:function(){return this.color_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"TargetPosition",{get:function(){return this.targetPosition_},enumerable:!1,configurable:!0}),e}(n),r=function(){function t(t){var n=this;this.game_=t,this.gom_=new e,this.columns_=10,this.rows_=20,this.boxSize_=32,this.canvasSize_=new o(this.columns_*this.boxSize_,this.rows_*this.boxSize_),this.canvas_=document.getElementById("main_canvas"),null!==this.canvas_&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(this.canvas_.addEventListener("touchend",(function(t){return n.Touch(t)}),!1),console.log("mobile")):(this.canvas_.addEventListener("mousedown",(function(t){return n.Click(t)})),console.log("not mobile"))),this.canvas_.width=this.canvasSize_.x,this.canvas_.height=this.canvasSize_.y,this.colors_=["#cc0000","#00cc00","#0000cc","#cccc00"],this.colorEventLiseners_=[];for(var i=0;i<4;i++){this.colorEventLiseners_.push(document.createElement("input")),this.colorEventLiseners_[i].setAttribute("type","color"),this.colorEventLiseners_[i].setAttribute("id",i.toString());var s=document.getElementById("color_div");null!==s&&s.appendChild(this.colorEventLiseners_[i]),this.colorEventLiseners_[i].value=this.colors_[i]}var r=document.getElementById("add_color_button");null!==r&&r.addEventListener("click",(function(t){return n.AddColorInput()}));var c=document.getElementById("sub_color_button");null!==c&&c.addEventListener("click",(function(t){return n.SubColorInput()}));var h=document.getElementById("shuffle_button");null!==h&&h.addEventListener("click",(function(t){return n.ChangeScene("Game")}))}return t.prototype.Init=function(){var t=document.getElementById("column_input"),e=document.getElementById("row_input");this.columns_=parseInt(t.value,10),this.rows_=parseInt(e.value,10),this.columns_>this.rows_?this.boxSize_=Math.floor(window.innerWidth/this.columns_):this.boxSize_=Math.floor(window.innerHeight/this.rows_),this.canvasSize_=new o(this.columns_*this.boxSize_,this.rows_*this.boxSize_),null!==this.canvas_&&(this.canvas_.width=this.canvasSize_.x,this.canvas_.height=this.canvasSize_.y);for(var n=0;n<this.colorEventLiseners_.length;n++)this.colors_.push(this.colorEventLiseners_[n].value);for(var i=0,r=0;r<this.rows_;r++)for(var c=0;c<this.columns_;c++){var h=Math.floor(Math.random()*this.colors_.length);this.Add(new s(this,"Box","Box",i,new o(this.boxSize_*c,this.boxSize_*r),new o(this.boxSize_,this.boxSize_),this.colors_[h],this.columns_,this.rows_)),i++}var a=document.getElementById("area_powerup_input");a.disabled=!0,a.checked=!1;var u=document.getElementById("row_powerup_input");u.disabled=!0,u.checked=!1;var l=document.getElementById("column_powerup_input");l.disabled=!0,l.checked=!1},t.prototype.Update=function(t){this.gom_.Update(t)},t.prototype.Draw=function(t){this.gom_.Draw(t)},t.prototype.ChangeScene=function(t){this.game_.ChangeScene(t)},t.prototype.Add=function(t){this.gom_.Add(t)},t.prototype.SearchByName=function(t){return this.gom_.SearchByName(t)},t.prototype.SearchByTag=function(t){return this.gom_.SearchByTag(t)},t.prototype.SearchByID=function(t){return this.gom_.SearchByID(t)},t.prototype.End=function(){this.gom_.Clear(),this.colors_=[]},t.prototype.Click=function(t){if(null!==this.canvas_&&void 0!==this.canvas_){var e=this.canvas_.getBoundingClientRect(),n=new o(0,0);n.x=t.clientX-e.left,n.y=t.clientY-e.top;var i=this.ConvertWorldToLocal(n);if(null!==i){var s=this.ConvertLocalToID(i);if(null!==s){var r=document.getElementById("area_powerup_input"),c=document.getElementById("row_powerup_input"),h=document.getElementById("column_powerup_input");r.checked?this.AreaPowerUp(s):c.checked?this.RowPowerUp(s):h.checked?this.ColumnPowerUp(s):this.DestroyBoxs(s),this.MoveBoxesDown(),this.MoveBoxesLeft()}}}else console.log("Fail")},t.prototype.Touch=function(t){t.preventDefault();var e=t.changedTouches[0],n=new DOMRect(0,0,0,0);null!==this.canvas_&&(n=this.canvas_.getBoundingClientRect());var i=new o(0,0);i.x=e.pageX-n.left,i.y=e.pageY-n.top;var s=this.ConvertWorldToLocal(i);if(null!==s){var r=this.ConvertLocalToID(s);null!==r&&(this.DestroyBoxs(r),this.MoveBoxesDown(),this.MoveBoxesLeft())}},t.prototype.DestroyBoxs=function(t){var e=[];if(this.SearchForLikeBox(t,t,[],e),!(e.length<2)){for(var o=0;o<e.length;o++){var n=this.SearchByID(e[o]);null!==n&&(n.Dead=!0)}this.gom_.RemoveDead(),this.PowerUp(e.length)}},t.prototype.SearchForLikeBox=function(t,e,o,n){for(var i=0;i<o.length;i++)if(e===o[i])return;o.push(e);var s=this.SearchByID(t),r=this.SearchByID(e);null!==s&&"Box"===s.Name&&null!==r&&"Box"===r.Name&&s.Color===r.Color&&(n.push(e),e<this.columns_*(this.rows_-1)&&this.SearchForLikeBox(t,e+this.columns_,o,n),e%this.columns_!=this.columns_-1&&this.SearchForLikeBox(t,e+1,o,n),e>this.columns_-1&&this.SearchForLikeBox(t,e-this.columns_,o,n),e%this.columns_!=0&&this.SearchForLikeBox(t,e-1,o,n))},t.prototype.MoveBoxesDown=function(){for(var t=this.columns_*this.rows_-1;t>this.columns_-1;t--)if(null===this.SearchByID(t))for(var e=t-this.columns_;e>=0;e-=this.columns_){var n=this.SearchByID(e);if(null!==n&&"Box"===n.Name){var i=this.ConvertLocalToWorld(this.ConvertIDToLocal(t));n.Translate(new o(i.x,i.y),t);break}}},t.prototype.MoveBoxesLeft=function(){for(var t=this.columns_*(this.rows_-1);t<this.columns_*this.rows_;t++)if(null===this.SearchByID(t))for(var e=t+1;e<this.columns_*this.rows_;e++)if(null!==this.SearchByID(e)){for(var n=e;n>0;n-=this.columns_){var i=this.SearchByID(n);if(null!==i&&"Box"===i.Name){var s=this.ConvertLocalToWorld(this.ConvertIDToLocal(t));i.Translate(new o(s.x,i.TargetPosition.y),n-(e-t))}}break}},t.prototype.PowerUp=function(t){if(!(t<10)){var e=document.getElementById("area_powerup_input"),o=document.getElementById("row_powerup_input"),n=document.getElementById("column_powerup_input");t>=20&&n.disabled?n.disabled=!1:t>15&&o.disabled?o.disabled=!1:e.disabled&&(e.disabled=!1)}},t.prototype.AreaPowerUp=function(t){var e=document.getElementById("area_powerup_input");e.disabled=!0,e.checked=!1;var o=[t],n=!1,i=!1,s=!1,r=!1;if(t<this.columns_*(this.rows_-1)&&(n=!0),t%this.columns_!=this.columns_-1&&(i=!0),t>this.columns_-1&&(s=!0),t%this.columns_!=0&&(r=!0),n){var c=t+this.columns_;o.push(c),r&&o.push(c-1),i&&o.push(c+1)}s&&(c=t-this.columns_,o.push(c),r&&o.push(c-1),i&&o.push(c+1)),r&&o.push(t-1),i&&o.push(t+1);for(var h=0;h<o.length;h++){var a=this.SearchByID(o[h]);null!==a&&(a.Dead=!0)}this.gom_.RemoveDead()},t.prototype.RowPowerUp=function(t){var e=document.getElementById("row_powerup_input");e.disabled=!0,e.checked=!1;for(var o=Math.floor(t/this.columns_)*this.columns_,n=o;n<o+this.columns_;n++){var i=this.SearchByID(n);null!==i&&(i.Dead=!0)}this.gom_.RemoveDead()},t.prototype.ColumnPowerUp=function(t){var e=document.getElementById("column_powerup_input");e.disabled=!0,e.checked=!1;for(var o=t%this.columns_,n=o;n<o+this.columns_*this.rows_;n+=this.columns_){var i=this.SearchByID(n);null!==i&&(i.Dead=!0)}this.gom_.RemoveDead()},t.prototype.ConvertWorldToLocal=function(t){var e=new o(0,0);return e.x=Math.floor(t.x/this.boxSize_),e.y=Math.floor(t.y/this.boxSize_),e},t.prototype.ConvertLocalToWorld=function(t){var e=new o(0,0);return e.x=t.x*this.boxSize_,e.y=t.y*this.boxSize_,e},t.prototype.ConvertLocalToID=function(t){return t.y%this.rows_*this.columns_+t.x},t.prototype.ConvertIDToLocal=function(t){var e=new o(0,0);return e.x=t%this.columns_,e.y=Math.floor(t/this.columns_),e},t.prototype.AddColorInput=function(){this.colorEventLiseners_.push(document.createElement("input")),this.colorEventLiseners_[this.colorEventLiseners_.length-1].setAttribute("type","color"),this.colorEventLiseners_[this.colorEventLiseners_.length-1].setAttribute("id",(this.colorEventLiseners_.length-1).toString());var t=document.getElementById("color_div");null!==t&&t.appendChild(this.colorEventLiseners_[this.colorEventLiseners_.length-1]),this.colorEventLiseners_[this.colorEventLiseners_.length-1].value="#ffffff"},t.prototype.SubColorInput=function(){var t,e=document.getElementById("color_div");null!==e&&(t=e.children,e.removeChild(t[t.length-1])),delete this.colorEventLiseners_[this.colorEventLiseners_.length-1],this.colorEventLiseners_.splice(this.colorEventLiseners_.length-1,1)},t}(),c=function(){function t(){this.currentScene_="Game",this.scenes_=new Map,this.SetScenes(),this.ChangeScene(this.currentScene_)}return t.prototype.SetScenes=function(){this.scenes_.set("Game",new r(this))},t.prototype.ChangeScene=function(t){var e,o;null===(e=this.scenes_.get(this.currentScene_))||void 0===e||e.End(),this.currentScene_=t,null===(o=this.scenes_.get(this.currentScene_))||void 0===o||o.Init()},t.prototype.Update=function(t){var e;null===(e=this.scenes_.get(this.currentScene_))||void 0===e||e.Update(t)},t.prototype.Draw=function(t){var e;null===(e=this.scenes_.get(this.currentScene_))||void 0===e||e.Draw(t)},t}(),h=new c,a=("main_canvas",document.getElementById("main_canvas")),u=a.getContext("2d");!function t(){var e,o;h.Update((e=Date.now(),o=e-l,l=e,o/1e3)),null!==u&&(u.fillStyle="black",u.fillRect(0,0,a.getBoundingClientRect().width,a.getBoundingClientRect().height)),h.Draw(u),setTimeout(t,16)}();var l=Date.now()})();