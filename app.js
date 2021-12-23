function getValue(){
    var year1 = document.getElementById ("year1");
    var year2 =  document.getElementById ("year2");
    var picColl = document.getElementById ("picture");
    var rollNO = document.getElementById("rollNO");
    var regisNo =  document.getElementById("regisNo");
    var name = document.getElementById("name");
    var fName = document.getElementById("fatherName");
    var dOB = document.getElementById("dOB");
    var nationality = document.getElementById("nationality");
    var mF = document.getElementById("mF");
    var religion = document.getElementById("religion");
    var resiAdd = document.getElementById("ResiAdd");
    var cNIC = document.getElementById("CNIC");
    var contactNO = document.getElementById("contactNO");
    var postCod = document.getElementById("postCod");
    var mOI = document.getElementById("mOI");
    var sscBoard = document.getElementById("sscBoard");
    var sscRoll= document.getElementById("sscRoll");
    var sscGroup = document.getElementById("sscGroup");
    var sscYear = document.getElementById("sscYear" );
    var sscGrade = document.getElementById("sscGrade");
    var hscBoard = document.getElementById("hscBoard");
    var hscRoll= document.getElementById("hscRoll");
    var hscGroup = document.getElementById("hscGroup");
    var hscYear = document.getElementById("hscYear" );
    var hscGrade = document.getElementById("hscGrade");
    
  var yr1 = year1.value;
  var yr2 = year2.value;
  var pic = picColl.value;
  var roll = rollNO.value;
  var regis = regisNo.value; 
  var nam = name.value; 
  var fnam = fName.value; 
  var dateOB= dOB.value;  
  var nation= nationality.value;  
  var malFem= mF.value;  
  var rel = religion.value;
  var resi = resiAdd.value;
  var nIC = cNIC.value;
  var cont = contactNO.value;
  var post = postCod.value;
  var markOI = mOI.value;
  var sBoard = sscBoard.value;
  var sRoll = sscRoll.value;
  var sGroup= sscGroup.value;
  var sYear = sscYear.value;
  var sGrade = sscGrade.value;
  var hBoard = hscBoard.value;
  var hRoll = hscRoll.value;
  var hGroup= hscGroup.value;
  var hYear = hscYear.value;
  var hGrade = hscGrade.value;
   
  
  console.log( yr1,yr2,pic,roll,regis,regis,nam,fnam,dateOB,nation,malFem,rel,resi,nIC,cont, post, markOI,sBoard,sRoll,
        sGroup,sYear,sGrade,hBoard,hRoll,hGroup,hYear,hGrade);
}
