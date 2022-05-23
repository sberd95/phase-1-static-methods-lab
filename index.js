class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^-' ,A-Za-z0-9]+/g, '')
  }
  static titleize(string){
    let sArray = string.split(' ')
    sArray[0] = this.capitalize(sArray[0])
    const nonCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i = 1; i < sArray.length; i++){
      if (!nonCap.find(word => word === sArray[i])){
        sArray[i] = this.capitalize(sArray[i])
      }
    }
    return sArray.join(' ')
  }
}