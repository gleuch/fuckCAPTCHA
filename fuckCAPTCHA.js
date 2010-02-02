/*

  fuckCAPTCHA
  ----------------------
  Based on previous code for Speed Project Widget by Greg Leuch

  ----------------------
  Install:
  Place the following code inside your <form> where you want the fuckCAPTCHA to display.

  <script type="text/javascript" src="http://fffff.at/widgets/fuckCAPTCHA/fuckCAPTCHA.js"></script>
  <script type="text/javascript">
    if (FATLab_fuckCAPTCHA) {
      FATLab_fuckCAPTCHA.Values.Theme='default'; // Options: default, classic, or vandal.
      FATLab_fuckCAPTCHA.WidgetArea = false; // Can specify ID of element to replace, e.g. 'fatlab_iz_awesome'
      FATLab_fuckCAPTCHA.Make();
    }
  </script>

*/


if (!FATLab_fuckCAPTCHA) {

  var FATLab_fuckCAPTCHA = {
    /* Variables for making this work */
    Values : {
      Title : 'fuckCAPTCHA',
      Theme : 'default',
      BasePath : '', // 'http://fffff.at/widgets/fuckCAPTCHA/',
      HTML : {
        'default' : '<style type="text/css"></style>'
      },
      GlobalHTML : ''
        +'<div id="%%CAPTCHA_ID%%" class="fuckCAPTCHA fuckCLEAR">'
        +' <div class="fuckIMAGE fuckCLEAR"><img src="%%CAPTCHA_IMAGE%%" id="%%CAPTCHA_ID%%_image" title="%%TITLE%%" alt="%%TITLE%%" /></div>'
        +' <div class="fuckCLEAR">'
        +'  <div class="fuckLEFT">'
        +'   <p>Type the two words:</p>'
        +'   <fieldset><input type="text" id="%%CAPTCHA_ID%%_value" name="fuckCAPTCHA" value="" /></fieldset>'
        +'  </div>'
        +'  <div class="fuckMIDDLE">'
        +'   <ul>'
        +'    <li class="fuckREFRESH"><a href="javascript: FATLab_fuckCAPTCHA.Reload(%%CAPTCHA_NUM%%);" title="Refresh the image">Refresh</a></li>'
        +'    <li class="fuckAUDIO"><a href="javascript: FATLab_fuckCAPTCHA.Audio(%%CAPTCHA_NUM%%);" title="Hear the text">Audio</a></li>'
        +'    <li class="fuckINFO"><a href="http://fffff.at/fuckCAPTCHA" target="_blank" title="fuckCAPTCHA Info">Info</a></li>'
        +'   </ul>'
        +'  </div>'
        +'  <div class="fuckRIGHT" title="%%TITLE%%"></div>'
        +' </div>'
        +' <div id="%%CAPTCHA_ID%%_audio" class="fuckPLAYBACK"></div>'
        +'</div>'
        +''
        +'<style type="text/css">'
        +' .fuckCAPTCHA, .fuckCAPTCHA div {clear: both; display: block; height: auto; width: auto; margin: 0; padding: 0;}'
        +' .fuckCAPTCHA {position: relative; width: 304px; padding: 4px; border: 1px solid #ff00ff; background: #ffff00; border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius: 5px;}'
        +' .fuckCAPTCHA .fuckCLEAR:after {content: "."; display: block; height: 0; visibility: hidden;}'
        +' .fuckCAPTCHA .fuckCLEAR {height: 49px; padding: 5px 0 0 0;}'
        +' .fuckCAPTCHA .fuckIMAGE {width: 300px; height: 57px; background: #fff; border: 1px solid #fff; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px;}'
        +''
        +' .fuckCAPTCHA .fuckLEFT {clear: none; float: left; width: 150px; height: 41px; padding: 6px 0 0 20px; overflow: hidden; background: #ffffff url(%%BASE_PATH%%images/leftarrow.gif) 3px 0 no-repeat; border: 1px solid #ff00ff; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px;}'
        +' .fuckCAPTCHA .fuckLEFT p {font-size: 11px; letter-spacing: -.02em; font-family: Helvetica, Arial, Verdana, sans-serif; color: #ff00ff; margin: 0; padding: 0 0 4px 0;}'
        +' .fuckCAPTCHA .fuckLEFT fieldset {margin: 0; padding: 0;}'
        +' .fuckCAPTCHA .fuckLEFT fieldset input {font-size: 11px; line-height: 11px; padding: 2px; margin: 0; color: #000; border: 1px solid #ff00ff; font-family: Helvetica, Arial, Verdana, sans-serif;}'
        +' .fuckCAPTCHA .fuckMIDDLE {clear: none; float: left; width: 23px; height: 47px; overflow: hidden; background: #ffffff; margin: 0 0 0 7px; border: 1px solid #ff00ff; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px;}'
        +' .fuckCAPTCHA .fuckMIDDLE ul {}'
        +' .fuckCAPTCHA .fuckMIDDLE ul li {}'
        +' .fuckCAPTCHA .fuckMIDDLE ul li a {display: block; width: 23px; height: 14px; font-size: 0;}'
        +' .fuckCAPTCHA .fuckMIDDLE li.fuckREFRESH a {background: url(%%BASE_PATH%%images/button_refresh.png) no-repeat; height: 15px;}'
        +' .fuckCAPTCHA .fuckMIDDLE li.fuckAUDIO a {background: url(%%BASE_PATH%%images/button_audio.png) no-repeat; border-top: 1px solid #ff00ff;}'
        +' .fuckCAPTCHA .fuckMIDDLE li.fuckINFO a {background: url(%%BASE_PATH%%images/button_info.png) no-repeat; border-top: 1px solid #ff00ff;}'
        +' .fuckCAPTCHA .fuckMIDDLE ul li a:hover {opacity: .5;}'
        +' .fuckCAPTCHA .fuckMIDDLE {}'
        +' .fuckCAPTCHA .fuckRIGHT {clear: none; float: left; background: url(%%BASE_PATH%%images/fuckCAPTCHA_logo.png) top left no-repeat; width: 90px; height: 49px; overflow: hidden; margin: 0 0 0 7px;}'
        +' .fuckCAPTCHA .fuckPLAYBACK {position: absolute; width: 0px; height: 0px; display: inline; visibility: hidden; overflow: hidden;}'
        +'</style>'
      ,
      Codes : [
        {code : 'fuck google', key : 'c04932m34439ifdkn43'},
        {code : 'fuck google', key : 'mf4edfk54g54n34ehjs'},
        {code : 'fuck google', key : 'k23jfdkewjo54mk79cv'}
      ],
      WidgetArea : false,
      Count : 0,
      Debug : false
    },

    /* This makes the pretty little graphic for how long it took. */
    Make : function() {
      var str = this.Values.GlobalHTML + this.Values.HTML[this.Values.Theme], html = '';

      if (str && str != '') {
      } else {
        str = '<p>Cannot load '+ this.Values.Title +'. :(</p>';
      }

      // Do lookup of where the code is placed in the site.
      var js = document.getElementsByTagName('script'), area = this.FindElement(this.Values.WidgetArea);
      if (!area) {
        var j = 0;
        for (var i=0; i<js.length; i++) {
          if (js[i].src != '' && js[i].src.match(/fuckCAPTCHA\.js/i)) {
            if (j == this.Values.Count) {this.Values.Count++; area = js[i]; break;}
            j++;
          }
        }
      }

      var rand_code = Math.floor(Math.random()*this.Values.Codes.length);
      var widget_id = 'fuckCAPTCHA_'+ this.Values.Count, image = this.Values.Codes[rand_code].key+'.gif';
      str = str.replace(/%%CAPTCHA_NUM%%/mg, this.Values.Count).replace(/%%CAPTCHA_ID%%/mg, widget_id).replace(/%%CAPTCHA_IMAGE%%/mg, this.Values.BasePath +'captchas/'+ image).replace(/%%BASE_PATH%%/mg, this.Values.BasePath).replace(/%%TITLE%%/mg, this.Values.Title);

      // Find the area to gracefully place the code, otherwise just dump the string.
      if (area) {
        var box = document.createElement('div');
        area.parentNode.insertBefore(box, area);
        box.innerHTML = str;
      } else {
        document.write(str);
      }

      // OnSubmit Event
      var formarea = this.FindElement(widget_id);
      if (formarea) {
        var cur_areaspot = formarea.parentNode;
        while (typeof(cur_areaspot) == 'object') {
          if (cur_areaspot.tagName.toLowerCase() == 'form') {
            cur_areaspot.className = (this.className ? this.className+' ' : '') + widget_id +'_form';
            cur_areaspot.onsubmit = function() {return FATLab_fuckCAPTCHA.Match(this);};
            break;
          } else {
            cur_areaspot = cur_areaspot.parentNode;
          }
        }
        
        if (!cur_areaspot) {
          alert('Cannot find form, therefore cannot add onsubmit.');
        }
      } else if (this.Values.Debug) {
        alert('Cannot find widget placement, therefore cannot add onsubmit to form.');
      }
    },

    Match : function(f) {
      var widget_id = f.className.replace(/^(.*)(fuckCAPTCHA_)([0-9]+)(_form)(.*)$/i, '$3');
      var widget_img = this.FindElement('fuckCAPTCHA_'+ widget_id +'_image'), widget_value = this.FindElement('fuckCAPTCHA_'+ widget_id +'_value');
      if (!widget_img || !widget_value) return true;
      var key = widget_img.src.replace(/^(.*\/)([A-Z0-9]+)(\.gif)$/i, '$2'), code = false;

      for (var i=0; i<this.Values.Codes.length; i++) {
        if (this.Values.Codes[i].key == key) code = this.Values.Codes[i];
      }

      if (!code) return true;
      
      if (code.code == widget_value.value) {
        return true;
      } else {
        alert('Sorry, but the '+ this.Values.Title +' code you entered is invalid.');
        this.Reload(widget_id);
        return false;
      }
    },
    
    Reload : function(id) {
      if (!id) return false;
      var widget_img = this.FindElement('fuckCAPTCHA_'+ id +'_image'), widget_value = this.FindElement('fuckCAPTCHA_'+ id +'_value');
      if (!widget_img || !widget_value) return false;

      var key = this.GetKey(id), j=0;
      var new_key = key;
      while(key == new_key && this.Values.Codes.length > 1 && j < 10) {
        var rand_code = Math.floor(Math.random()*this.Values.Codes.length);
        new_key = this.Values.Codes[rand_code].key;
        j++;
      }

      widget_img.src = this.Values.BasePath +'captchas/'+ new_key +'.gif';
      widget_value.value = '';
      widget_value.focus();
    },

    Audio : function(id) {
      if (!id) return false;
      var widget_audio = this.FindElement('fuckCAPTCHA_'+ id +'_audio');
      var key = this.GetKey(id);
      if (!widget_audio || !key) return false;
      
      // this would be audio parse
      widget_audio.innerHTML = '<object data="'+ this.Values.BasePath +'js/player.swf" type="application/x-shockwave-flash" width="100" height="10" id="fuckCAPTCHA_'+ id +'_audioplayer" name="fuckCAPTCHA_'+ id +'_audioplayer"><param value="opaque" name="wmode"><param value="false" name="menu"><param value="autostart=yes&amp;soundFile='+ this.Values.BasePath +'audios/'+ key +'.mp3&amp;playerID=fuckCAPTCHA_'+ id +'_audioplayer" name="flashvars"></object>';
    },

    GetKey : function(id) {
      var widget_img = this.FindElement('fuckCAPTCHA_'+ id +'_image'), widget_value = this.FindElement('fuckCAPTCHA_'+ id +'_value');
      if (!widget_img || !widget_value) return true;
      return widget_img.src.replace(/^(.*\/)([A-Z0-9]+)(\.gif)$/i, '$2');
    },

    /* Get elements by ID */
    FindElement : function() {
      var elms = new Array();
      for (var i = 0; i < arguments.length; i++) {
        var elm = arguments[i];
        if (typeof(elm) == 'string') elm = document.getElementById(elm);
        if (typeof(elm) == 'object') elms.push(elm);
      }
      return (elms.length > 0 ? (elms.length > 1 ? elms : elms[0]) : false);
    }

  };
}