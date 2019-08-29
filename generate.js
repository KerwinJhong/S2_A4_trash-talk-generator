function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
};

const phrase = ['很簡單', '很容易', '很快', '很正常'];

function generate(option) {
  let collection = {};

  if (option === 'engineer') {
    collection = {
      todo: sample(task.engineer),
      text: sample(phrase),
      img:
        'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5668/angry-developer.jpg',
      career: '工程師',
      engineer: 'selected',
    };
  }
  if (option === 'designer') {
    collection = {
      todo: sample(task.designer),
      text: sample(phrase),
      img:
        'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5667/angry-designer.jpg',
      career: '設計師',
      designer: 'selected',
    };
  }
  if (option === 'entrepreneur') {
    collection = {
      todo: sample(task.entrepreneur),
      text: sample(phrase),
      img:
        'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5669/angry-founder.jpg',
      career: '創業家',
      entrepreneur: 'selected',
    };
  }

  return collection;
}

module.exports = generate;
