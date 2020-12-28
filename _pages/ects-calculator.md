---
ref: ects-calculator
title: "ECTS"
permalink: "/ects-calculator/"
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="/assets/js/ects.js"></script>
<p><span id ="ects_span">0</span> <span>ects in total</span></p>
<p><span>Απομένουν:  </span><span id="ects_span_240"></span></p>

<div id="boxes">
{% include toc title = "ΜΑΘΗΜΑΤΑ" icon = "graduation-cap" %}

<div markdown="1"> 
# ΠΡΟΠΤΥΧΙΑΚΟ 
</div>

<p><input onclick="autoCheck(mandatory_all,this)" type="checkbox" id="mandatory_checkbox" name="mandatory_checkbox">
<label style="display: initial;" for="mandatory_checkbox">Όλα τα υποχρεωτικά Μαθήματα</label></p>

<p><input onclick="autoCheck(AE_all,this)" type="checkbox" id="AE_checkbox" name="AE_checkbox">
<label style="display: initial;" for="AE_checkbox">'Ολα τα Α.Ε</label>

<p><input style="display: initial;" onclick="autoCheck(PS_all,this)" type="checkbox" id="PS_checkbox" name="PS_checkbox">
<label style="display: initial;" for="PS_checkbox">Όλα τα Π.Σ</label></p>


<div markdown="1"> 
## **A' ΕΞΑΜΗΝΟ**
</div>

<input onclick="autoCheck(mandatory1,this)" type="checkbox" id="mandatory1_checkbox" name="mandatory1_checkbox">
<label style="display: initial;" for="mandatory1_checkbox">Όλα τα υποχρεωτικά - Ά εξάμηνο</label></p>

<div markdown="1"> 
## Υποχρεωτικά Μαθήματα
</div>

{% include ects-collection-sort.html i = 1 l = 'courses' c_type = "M" %}



<div markdown="1"> 
## **Β' ΕΞΑΜΗΝΟ**
</div>

<p><input onclick="autoCheck(mandatory2,this)" type="checkbox" id="mandatory2_checkbox" name="mandatory2_checkbox">
<label style="display: initial;" for="mandatory2_checkbox">Όλα τα υποχρεωτικά - Β εξάμηνο</label></p>

<div markdown="1"> 
## Υποχρεωτικά Μαθήματα
</div>

{% include ects-collection-sort.html i = 2 l = 'courses' c_type = "M" %}

<div markdown="1"> 
## Μαθήματα Επιλογής
</div>

{% include ects-collection-sort.html i = 2 l = 'courses' c_type = "Ο" %}



<div markdown="1"> 
## **Γ' ΕΞΑΜΗΝΟ**
</div>

<p><input onclick="autoCheck(mandatory3,this)" type="checkbox" id="mandatory3_checkbox" name="mandatory3_checkbox">
<label style="display: initial;" for="mandatory3_checkbox">Όλα τα υποχρεωτικά - Γ εξάμηνο</label></p>

<div markdown="1"> 
## Υποχρεωτικά Μαθήματα
</div>

{% include ects-collection-sort.html i = 3 l = 'courses' c_type = "M" %}

<div markdown="1"> 
## Μαθήματα Επιλογής
</div>

{% include ects-collection-sort.html i = 3 l = 'courses' c_type = "Ο" %}



<div markdown="1"> 
## **Δ' ΕΞΑΜΗΝΟ**
</div>

<p><input onclick="autoCheck(mandatory4,this)" type="checkbox" id="mandatory4_checkbox" name="mandatory4_checkbox">
<label style="display: initial;" for="mandatory4_checkbox">Όλα τα υποχρεωτικά - Δ εξάμηνο</label></p>


<div markdown="1"> 
## Υποχρεωτικά Μαθήματα
</div>

{% include ects-collection-sort.html i = 4 l = 'courses' c_type = "M" %}

<div markdown="1"> 
## Μαθήματα Επιλογής
</div>

{% include ects-collection-sort.html i = 4 l = 'courses' c_type = "Ο" %}



<div markdown="1"> 
## **Ε' ΕΞΑΜΗΝΟ**
</div>

<p><input onclick="autoCheck(mandatory5,this)" type="checkbox" id="mandatory5_checkbox" name="mandatory5_checkbox">
<label style="display: initial;" for="mandatory5_checkbox">Όλα τα υποχρεωτικά - Δ εξάμηνο</label></p>

<p><input onclick="autoCheck(AE5,this)" type="checkbox" id="AE5_checkbox" name="AE5_checkbox">
<label style="display: initial;" for="AE5_checkbox">Όλα του Α.Ε - Ε εξάμηνο</label></p>

<p><input onclick="autoCheck(PS5,this)" type="checkbox" id="PS5_checkbox" name="PS5_checkbox">
<label style="display: initial;" for="PS5_checkbox">Όλα του Π.Σ - Ε εξάμηνο</label></p>

<div markdown="1"> 
## Υποχρεωτικά Μαθήματα
</div>

{% include ects-collection-sort.html i = 5 l = 'courses' c_type = "M" %}

<div markdown="1"> 
## Μαθήματα Κατεύθυνσης Π.Σ.
</div>

{% include ects-collection-sort.html i = 5 l = 'courses' c_type = "I" %}

<div markdown="1"> 
## Μαθήματα Κατεύθυνσης Α.Ε.
</div>

{% include ects-collection-sort.html i = 5 l = 'courses' c_type = "H" %}

<div markdown="1"> 
## Μαθήματα Επιλογής
</div>

{% include ects-collection-sort.html i = 5 l = 'courses' c_type = "Ο" %}



<div markdown="1"> 
## **ΣΤ' ΕΞΑΜΗΝΟ**
</div>

<p><input onclick="autoCheck(mandatory6,this)" type="checkbox" id="mandatory6_checkbox" name="mandatory6_checkbox">
<label style="display: initial;" for="mandatory6_checkbox">Όλα τα υποχρεωτικά - ΣΤ εξάμηνο</label></p>

<p><input onclick="autoCheck(AE6,this)" type="checkbox" id="AE6_checkbox" name="AE6_checkbox">
<label style="display: initial;" for="AE6_checkbox">Όλα του Α.Ε - ΣΤ εξάμηνο</label></p>

<p><input onclick="autoCheck(PS6,this)" type="checkbox" id="PS6_checkbox" name="PS6_checkbox">
<label style="display: initial;" for="PS6_checkbox">Όλα του Π.Σ - ΣΤ εξάμηνο</label></p>

<div markdown="1"> 
## Υποχρεωτικά Μαθήματα
</div>

{% include ects-collection-sort.html i = 6 l = 'courses' c_type = "M" %}

<div markdown="1"> 
## Μαθήματα Κατεύθυνσης Π.Σ.
</div>

{% include ects-collection-sort.html i = 6 l = 'courses' c_type = "I" %}

<div markdown="1"> 
## Μαθήματα Κατεύθυνσης Α.Ε.
</div>

{% include ects-collection-sort.html i = 6 l = 'courses' c_type = "H" %}

<div markdown="1"> 
## Μαθήματα Επιλογής
</div>

{% include ects-collection-sort.html i = 6 l = 'courses' c_type = "Ο" %}




<div markdown="1"> 
## **Ζ' ΕΞΑΜΗΝΟ**
</div>

<p><input onclick="autoCheck(mandatory7,this)" type="checkbox" id="mandatory7_checkbox" name="mandatory7_checkbox">
<label style="display: initial;" for="mandatory7_checkbox">Όλα τα υποχρεωτικά - Ζ εξάμηνο</label></p>

<p><input onclick="autoCheck(AE7,this)" type="checkbox" id="AE7_checkbox" name="AE7_checkbox">
<label style="display: initial;" for="AE7_checkbox">Όλα του Α.Ε - Ζ εξάμηνο</label></p>

<p><input onclick="autoCheck(PS7,this)" type="checkbox" id="PS7_checkbox" name="PS7_checkbox">
<label style="display: initial;" for="PS7_checkbox">Όλα του Π.Σ - Ζ εξάμηνο</label></p>

<div markdown="1"> 
## Υποχρεωτικά Μαθήματα
</div>

{% include ects-collection-sort.html i = 7 l = 'courses' c_type = "M" %}

<div markdown="1"> 
## Μαθήματα Κατεύθυνσης Π.Σ.
</div>

{% include ects-collection-sort.html i = 7 l = 'courses' c_type = "I" %}

<div markdown="1"> 
## Μαθήματα Κατεύθυνσης Α.Ε.
</div>

{% include ects-collection-sort.html i = 7 l = 'courses' c_type = "H" %}

<div markdown="1"> 
## Μαθήματα Επιλογής
</div>

{% include ects-collection-sort.html i = 7 l = 'courses' c_type = "Ο" %}




<div markdown="1"> 
## **Η' ΕΞΑΜΗΝΟ**
</div>
<p><input onclick="autoCheck(mandatory8,this)" type="checkbox" id="mandatory8_checkbox" name="mandatory8_checkbox">
<label style="display: initial;" for="mandatory8_checkbox">Όλα τα υποχρεωτικά - 8 εξάμηνο</label></p>

<p><input onclick="autoCheck(AE8,this)" type="checkbox" id="AE8_checkbox" name="AE8_checkbox">
<label style="display: initial;" for="AE8_checkbox">Όλα του Α.Ε - Η εξάμηνο</label></p>

<p><input onclick="autoCheck(PS8,this)" type="checkbox" id="PS8_checkbox" name="PS8_checkbox">
<label style="display: initial;" for="PS8_checkbox">Όλα του Π.Σ - Η εξάμηνο</label></p>

<div markdown="1"> 
## Υποχρεωτικά Μαθήματα
</div>

{% include ects-collection-sort.html i = 8 l = 'courses' c_type = "M" %}

<div markdown="1"> 
## Μαθήματα Κατεύθυνσης Π.Σ.
</div>

{% include ects-collection-sort.html i = 8 l = 'courses' c_type = "I" %}

<div markdown="1"> 
## Μαθήματα Κατεύθυνσης Α.Ε.
</div>

{% include ects-collection-sort.html i = 8 l = 'courses' c_type = "H" %}

<div markdown="1"> 
## Μαθήματα Επιλογής
</div>

{% include ects-collection-sort.html i = 8 l = 'courses' c_type = "Ο" %}

</div>
