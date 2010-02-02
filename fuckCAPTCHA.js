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
      Theme : 'default',
      HTML : {
        'default' : '<div class="fuckCAPTCHA">CODE HERE</div>',
      },
      WidgetArea : false,
      Count : 0,
      Debug : false
    },

    /* This makes the pretty little graphic for how long it took. */
    Make : function() {
      var str = this.Values.HTML[this.Values.Theme], html = '';

      if (str & str != '') {
        // Something good?
      } else {
        str = '<p>Cannot load fuckCAPTCHA. :(</p>';
      }


      // Do lookup of where the code is placed in the site.
      var js = document.getElementsByTagName('script'), area = this.FindElement(this.Values.WidgetArea);
      if (!area) {
        var j = 0;
        for (var i=0; i<js.length; i++) {
          if (js[i].src != '' && js[i].src.match(/fffff\.at\/widgets\/fuckCAPTCHA\/fuckCAPTCHA\.js/i)) {
            if (j == this.Values.Count) {this.Values.Count++; area = js[i]; break;}
            j++;
          }
        }
      }

      var widget_id = 'fuckCAPTCHA_'+ this.Values.Count;

      // Find the area to gracefully place the code, otherwise just dump the string.
      if (area) {
        var box = document.createElement('span');
        box.setAttribute('id', widget_id); box.id = widget_id;
        area.parentNode.insertBefore(box, area);
        box.innerHTML = str;
      } else {
        document.write('<span id="'+ widget_id +'">'+ str +'</span>');
      }

      // OnSubmit Event
      var formarea = this.FindElement(widget_id);
      if (formarea) {
        var cur_areaspot = formarea.parentNode;
        while (cur_areaspot) {
          if (cur_areaspot.tagName.toLowerCase() == 'form') {
            // add into onsubmit to validate this
            alert('found the form. yay! :)');
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