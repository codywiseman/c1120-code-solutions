const graduate = function(credential){
  return function fullName(fullName) {
    return fullName + ',' + credential;
  }
};

const medicalSchool= graduate('M.D.')

const lawSchool = graduate('Esq.')

medicalSchool('Cody Wiseman');
lawSchool('Cody Wiseman')
