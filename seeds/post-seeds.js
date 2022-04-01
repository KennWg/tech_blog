const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec blandit tortor. Aliquam a massa vel erat suscipit iaculis id vel enim. Suspendisse tincidunt id eros ac tempor. Integer eu tristique libero. Ut nec ullamcorper sem. Nunc turpis velit, tempus ut accumsan a, hendrerit a felis. Suspendisse aliquet vitae urna sit amet vehicula. Nullam venenatis diam ut diam sollicitudin vestibulum. Donec vulputate eleifend sapien, a iaculis turpis commodo eu. Sed non interdum dolor, eu iaculis elit. Donec eu leo id sapien interdum eleifend. Vestibulum feugiat dapibus justo id mattis.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
