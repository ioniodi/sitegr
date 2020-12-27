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
<input onclick="autoCheck(mandatory_all,this)" type="checkbox" id="mandatory_checkbox" name="mandatory_checkbox">
<label for="mandatory_checkbox">Όλα τα υποχρεωτικά Μαθήματα</label>

<input onclick="autoCheck(AE_all,this)" type="checkbox" id="AE_checkbox" name="AE_checkbox">
<label for="AE_checkbox">AE</label>

<input onclick="autoCheck(PS_all,this)" type="checkbox" id="PS_checkbox" name="PS_checkbox">
<label for="PS_checkbox">PS</label>



<div markdown="1"> 
## **A' ΕΞΑΜΗΝΟ**
</div>

<input onclick="autoCheck(mandatory1,this)" type="checkbox" id="mandatory1_checkbox" name="mandatory1_checkbox">
<label for="mandatory1_checkbox">Όλα τα υποχρεωτικά - Ά εξάμηνο</label>

<div markdown="1"> 
## Υποχρεωτικά Μαθήματα
</div>

{% include ects-collection-sort.html i = 1 l = 'courses' c_type = "M" %}

<input onclick="autoCheck(mandatory2,this)" type="checkbox" id="mandatory2_checkbox" name="mandatory2_checkbox">
<label for="mandatory2_checkbox">Όλα τα υποχρεωτικά - Β εξάμηνο</label>

<div markdown="1"> 
## **Β' ΕΞΑΜΗΝΟ**
</div>


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

<input onclick="autoCheck(mandatory3,this)" type="checkbox" id="mandatory3_checkbox" name="mandatory3_checkbox">
<label for="mandatory3_checkbox">Όλα τα υποχρεωτικά - Γ εξάμηνο</label>

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

<input onclick="autoCheck(mandatory4,this)" type="checkbox" id="mandatory4_checkbox" name="mandatory4_checkbox">
<label for="mandatory4_checkbox">Όλα τα υποχρεωτικά - Δ εξάμηνο</label>


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

<input onclick="autoCheck(mandatory5,this)" type="checkbox" id="mandatory5_checkbox" name="mandatory5_checkbox">
<label for="mandatory5_checkbox">Όλα τα υποχρεωτικά - Δ εξάμηνο</label>


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

<input onclick="autoCheck(mandatory6,this)" type="checkbox" id="mandatory6_checkbox" name="mandatory6_checkbox">
<label for="mandatory6_checkbox">Όλα τα υποχρεωτικά - ΣΤ εξάμηνο</label>


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

<input onclick="autoCheck(mandatory7,this)" type="checkbox" id="mandatory7_checkbox" name="mandatory7_checkbox">
<label for="mandatory7_checkbox">Όλα τα υποχρεωτικά - Ζ εξάμηνο</label>


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
<input onclick="autoCheck(mandatory8,this)" type="checkbox" id="mandatory8_checkbox" name="mandatory8_checkbox">
<label for="mandatory8_checkbox">Όλα τα υποχρεωτικά - 8 εξάμηνο</label>

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
