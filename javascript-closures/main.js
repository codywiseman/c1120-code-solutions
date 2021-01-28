const graduate = function(credential){
  var fullName = function(fullName) {
    return fullName + ',' + credential;
  }
  return fullName;
};

const medicalSchool= graduate('M.D.')

const lawSchool = graduate('Esq.')

medicalSchool('Cody Wiseman');
lawSchool('Cody Wiseman')
