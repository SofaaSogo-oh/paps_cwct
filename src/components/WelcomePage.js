import React, {useState} from "react";
import Base from "./Base/Base"
import ImageSelector from "./Base/ImageSelector";

export default function WelcomePage() {
    const [imgState, setImgState] = useState(null);
    return (
        <Base>
            <ImageSelector imgState={imgState} setImgState={setImgState} />
            <h1>Hello there!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim elit eu vehicula sollicitudin. Phasellus hendrerit gravida diam volutpat elementum. Sed volutpat mollis vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec bibendum lorem sed aliquet efficitur. Vivamus augue diam, dapibus aliquam cursus sed, porttitor id magna. Phasellus aliquam lorem ut dui tempus ornare.
            </p>
            <p>
                Suspendisse eget quam erat. Suspendisse eleifend venenatis erat, id vestibulum ligula sodales feugiat. Proin tempor, justo at imperdiet tristique, enim sapien mattis ex, nec ornare sem ex id metus. Duis non leo non orci lobortis tristique ut at lectus. Etiam in mollis lorem, sed dapibus nisl. Vivamus vel nibh quis leo varius luctus et quis nunc. In quis velit diam. Morbi risus mi, ultricies luctus arcu eu, blandit dapibus libero.
            </p>
            <p>
                In ex magna, congue ac nisi in, blandit tincidunt tellus. Duis auctor placerat libero, eu pretium metus. Sed eget orci nec elit scelerisque imperdiet non sit amet lacus. Aliquam erat risus, aliquam nec egestas commodo, consequat varius libero. Aenean est velit, pulvinar posuere augue vel, luctus suscipit velit. Sed dictum nisi non vestibulum sollicitudin. Mauris tristique, nulla et scelerisque luctus, leo libero rhoncus elit, in laoreet quam justo et dui. Fusce vel velit turpis. Proin ac odio nec dui tempor viverra. Sed auctor arcu tellus, et scelerisque sapien auctor at.
            </p>
            <p>
                Etiam aliquet laoreet sem et congue. Nunc in lectus placerat, imperdiet nisi quis, placerat tellus. Sed in nulla libero. Phasellus tempor tellus interdum mattis congue. Donec orci sem, rhoncus in odio a, molestie fringilla mi. Integer mollis mattis mi, lacinia malesuada tortor sagittis non. Ut mauris nisi, venenatis facilisis felis sit amet, vestibulum vulputate nunc. Quisque ultricies commodo massa, id facilisis justo hendrerit nec. Donec et nibh nec lacus ultricies finibus. Aenean hendrerit et dui quis porttitor. Quisque suscipit tellus at vestibulum pretium. Praesent rutrum tincidunt quam in finibus. Ut dui ipsum, tincidunt ut iaculis at, dapibus at nunc. Curabitur nec justo lobortis lacus faucibus accumsan. Donec bibendum bibendum leo sit amet malesuada. Integer placerat ex vitae augue posuere, quis egestas velit vehicula.
            </p>
            <p>
                Cras eget eleifend turpis. In erat dui, posuere non orci a, feugiat accumsan turpis. Aliquam tincidunt ac tellus sed bibendum. Nullam at velit dolor. In porttitor, nisi quis auctor lacinia, velit lorem faucibus urna, ac rhoncus velit mauris a felis. Vivamus eleifend justo dolor, vitae efficitur lectus imperdiet sed. Morbi elementum nibh ac ante dapibus cursus. Morbi vel vehicula libero. Suspendisse egestas, tellus et pretium interdum, dui libero hendrerit nisi, sit amet venenatis sem nisi vel leo. Aenean mi nibh, ullamcorper a porttitor a, ornare et ante. Vivamus ullamcorper, lectus ac varius venenatis, libero sapien molestie lectus, et hendrerit justo ligula sed urna. Suspendisse potenti. Quisque eget molestie orci, ut elementum augue. Donec non sagittis magna.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim elit eu vehicula sollicitudin. Phasellus hendrerit gravida diam volutpat elementum. Sed volutpat mollis vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec bibendum lorem sed aliquet efficitur. Vivamus augue diam, dapibus aliquam cursus sed, porttitor id magna. Phasellus aliquam lorem ut dui tempus ornare.
            </p>
            <p>
                Suspendisse eget quam erat. Suspendisse eleifend venenatis erat, id vestibulum ligula sodales feugiat. Proin tempor, justo at imperdiet tristique, enim sapien mattis ex, nec ornare sem ex id metus. Duis non leo non orci lobortis tristique ut at lectus. Etiam in mollis lorem, sed dapibus nisl. Vivamus vel nibh quis leo varius luctus et quis nunc. In quis velit diam. Morbi risus mi, ultricies luctus arcu eu, blandit dapibus libero.
            </p>
            <p>
                In ex magna, congue ac nisi in, blandit tincidunt tellus. Duis auctor placerat libero, eu pretium metus. Sed eget orci nec elit scelerisque imperdiet non sit amet lacus. Aliquam erat risus, aliquam nec egestas commodo, consequat varius libero. Aenean est velit, pulvinar posuere augue vel, luctus suscipit velit. Sed dictum nisi non vestibulum sollicitudin. Mauris tristique, nulla et scelerisque luctus, leo libero rhoncus elit, in laoreet quam justo et dui. Fusce vel velit turpis. Proin ac odio nec dui tempor viverra. Sed auctor arcu tellus, et scelerisque sapien auctor at.
            </p>
            <p>
                Etiam aliquet laoreet sem et congue. Nunc in lectus placerat, imperdiet nisi quis, placerat tellus. Sed in nulla libero. Phasellus tempor tellus interdum mattis congue. Donec orci sem, rhoncus in odio a, molestie fringilla mi. Integer mollis mattis mi, lacinia malesuada tortor sagittis non. Ut mauris nisi, venenatis facilisis felis sit amet, vestibulum vulputate nunc. Quisque ultricies commodo massa, id facilisis justo hendrerit nec. Donec et nibh nec lacus ultricies finibus. Aenean hendrerit et dui quis porttitor. Quisque suscipit tellus at vestibulum pretium. Praesent rutrum tincidunt quam in finibus. Ut dui ipsum, tincidunt ut iaculis at, dapibus at nunc. Curabitur nec justo lobortis lacus faucibus accumsan. Donec bibendum bibendum leo sit amet malesuada. Integer placerat ex vitae augue posuere, quis egestas velit vehicula.
            </p>
            <p>
                Cras eget eleifend turpis. In erat dui, posuere non orci a, feugiat accumsan turpis. Aliquam tincidunt ac tellus sed bibendum. Nullam at velit dolor. In porttitor, nisi quis auctor lacinia, velit lorem faucibus urna, ac rhoncus velit mauris a felis. Vivamus eleifend justo dolor, vitae efficitur lectus imperdiet sed. Morbi elementum nibh ac ante dapibus cursus. Morbi vel vehicula libero. Suspendisse egestas, tellus et pretium interdum, dui libero hendrerit nisi, sit amet venenatis sem nisi vel leo. Aenean mi nibh, ullamcorper a porttitor a, ornare et ante. Vivamus ullamcorper, lectus ac varius venenatis, libero sapien molestie lectus, et hendrerit justo ligula sed urna. Suspendisse potenti. Quisque eget molestie orci, ut elementum augue. Donec non sagittis magna.
            </p>
        </Base>
    )
}