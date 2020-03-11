import React, { Component } from "react"
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import imgdata from './imagedata';
import {text} from './paragraphs';

class PdfGenerator extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    addLogo = () => {

    }

    jsGenerator = () => {
        var doc = jsPDF('p', 'pt');
        // convert string into string arrays (paragraphs)
        var firstParArray = doc.splitTextToSize(text["firstParagraph"], 570);
        var secondParArray = doc.splitTextToSize(text["secondParagraph"], 570);
        var thirdParArray = doc.splitTextToSize(text["thirdParagraph"], 570);
        var fourParArray = doc.splitTextToSize(text["fourParagraph"], 570);
        var fiveParArray = doc.splitTextToSize(text["fiveParagraph"], 570);
        var sixParArray = doc.splitTextToSize(text["sixParagraph"], 570);
        var sevenParArray = doc.splitTextToSize(text["sevenParagraph"], 570);
        
        // phrases list
        var firstListone = doc.splitTextToSize(text["firstList"]["first"], 400);
        var firstListsecond = doc.splitTextToSize(text["firstList"]["second"], 400);
        var firstListthird = doc.splitTextToSize(text["firstList"]["third"], 500);
        var firstListfourth = doc.splitTextToSize(text["firstList"]["fourth"], 200);
        var firstListfifth = doc.splitTextToSize(text["firstList"]["fifth"], 200);
        var firstListsixth = doc.splitTextToSize(text["firstList"]["sixth"], 200);
        var firstListseventh = doc.splitTextToSize(text["firstList"]["seventh"], 200);
        var firstListeigth = doc.splitTextToSize(text["firstList"]["eigth"], 200);


        // adds the cipheak logo
        doc.addImage(imgdata, "PNG", 250, 15, 85, 80);
        // set font and size for the languague name
        doc.setFontSize(18);
        doc.setFont('Helvetica', '');
        // add languague name to the pdf
        doc.text(230, 110, '{languageName}');
        // set font size for the key
        doc.setFontSize(14)
        doc.text(222, 135, '|SECRET_KEY_USER|');
        // set font size for the pdf body
        doc.setFontSize(15);
        // add text paragraphs
        doc.text(30, 170, firstParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 320, secondParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 410, thirdParArray, {maxWidth: 530, align: "justify"});
        // set font for the first title
        doc.setFont('Helvetica', 'bold');
        doc.text(280, 450, text["firstTitle"], {maxWidth: 530, align: "center"});
        doc.setFontSize(15);
        // set text body font again
        doc.setFont('Helvetica', '');
        // add list of phrases
        doc.text(30, 470, firstListone, {maxWidth:530, align: "justify"});
        doc.text(30, 510, firstListsecond, {maxWidth:530, align: "justify"});
        doc.text(30, 550, firstListthird, {maxWidth:630, align: "justify"});
        doc.text(30, 600, firstListfourth, {maxWidth:500, align: "justify"});
        doc.text(30, 640, firstListfifth, {maxWidth:500, align: "justify"});
        doc.text(30, 680, firstListsixth, {maxWidth:500, align: "justify"});
        doc.text(30, 720, firstListseventh, {maxWidth:500, align: "justify"});
        doc.text(30, 770, firstListeigth, {maxWidth:500, align: "justify"});

        //add page #2
        doc.addPage();
        doc.setFont('Helvetica', 'bold');
        // adds first title to second page
        doc.text(280, 50, text["secondTitle"], {maxWidth: 530, align: "center"});
        // return font to normal
        doc.setFontSize(15);
        doc.setFont('Helvetica', '');
        //adds first paragraph of second page
        doc.text(30, 110, fourParArray, {maxWidth: 530, align: "justify"});
        // set line for diagram
        doc.line(80, 300, 510, 300);
        doc.line(300, 210, 300, 390);
        // add text to the diagram with specific font
        doc.setFont('Helvetica', 'bold');
        doc.text(150, 260, 'ENDINGS');
        doc.text(350, 260, 'PREPOSITIONS');
        doc.text(150, 340, 'AFFIXES');
        doc.text(350, 340, 'CORRELATIVES');
        // return font to normal
        doc.setFontSize(15);
        doc.setFont('Helvetica', '');
        doc.text(30, 460, fiveParArray, {maxWidth: 530, align: "justify"});
        // add a title
        doc.setFont('Helvetica', 'bold');
        doc.text(280, 560, text["thirdTitle"], {maxWidth: 530, align: "center"});
        // return font to normal
        doc.setFontSize(15);
        doc.setFont('Helvetica', '');
        doc.text(30, 600, sixParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 700, sevenParArray, {maxWidth: 530, align: "justify"});

        //add page #3
        doc.addPage();
        // create table
        var columns = ["Letter", "Name", "Symbol", "Pronunciation"];
        var data = [
            ["A - a", "a", "/a/", 'sounds like the a in father'],
            ["B - b", "b{endNoun}", "/b/", "sounds like the b in bank"],
            ["C - c", "c{endNoun}", "/ʦ/", "sounds like the ts in rats"] ];
        doc.autoTable(columns,data,
            { margin:{ top: 25 }}
            );
        
        //saves document
        doc.save('lanuague.pdf');
    }

    render() {
        return (
        <div>
            <h1>hello worddld</h1>
            <button onClick={this.jsGenerator}>Download pdf</button>
        </div>
        );
    }
}
export default PdfGenerator;