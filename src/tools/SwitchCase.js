export const handleCatColor = (category) => {
  let color;
  switch (category) {
    case 'Novel':
      color = 'text-[#19A7CE]'
      break;
    case 'Poetry':
      color = 'text-[#BE5A83]'
      break;
    case 'Academic':
      color = 'text-[#6C9BCF]'
      break;
    case 'Non Fiction':
      color = 'text-[#088395]'
      break;
    case 'Research and Journal':
      color = 'text-[#FF6D60]'
      break;
    default:
      color = 'text-[#F7D060]'
      break;
  }
  return color;
}
