import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

export default class Terms extends React.Component {
    static navigationOptions = ({ navigation }) =>( {
        title: '利用規約',
        headerRight: <View></View>
    });

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>第1条（本サービスについて）
（1）利用者は本サービス利用にあたり、自己の責任と負担において通信機器、ソフトウェア、回線環境等設備を用意するものとします。
（2）本サービスは、本サイトを通して行う情報の提供、およびその他の情報の提供から構成されます。
第2条（本規約の変更）
（1）当社は、利用者の承諾を得ることなく、当社が定める方法により、本規約を変更することができるものとします。この場合、提供条件等は変更後の規約によります。
（2）変更後の規約は、当社が変更内容を本サービスのページ上に掲示した時点から効力を有するものとします。
第3条（当社からの通知）
（1） 当社は、本サービスのページへの掲示、その他当社が適当と判断する方法・範囲で、利用者が本サービスを利用するうえで必要な事項を通知するものとします。
（2） 前項に定める通知は、当社が当該通知の内容を、本サービスのページに掲示した時点から効力を有するものとします。
第4条（著作権）
本サービスにおいて当社が提供するページ等のコンテンツ、画面デザインその他一切の著作物の著作権は、当社又は当社が定める者に帰属するものとします。

第5条（利用契約の締結等）
（1） 利用者は、本サービスを利用するにあたり必要な情報を入力、当社宛に発信することにより本サービスの申し込みをするものとし、当該発信情報が本サービスのサーバに格納された時点で、利用契約が成立するものとします。
（2） 当社は、前項その他本規約の規定にかかわらず、利用者が次のいずれかに該当する場合には、利用契約を締結しないことがあります。
1. 本サービスの申し込みをした方が実在しないことが判明したとき
2.本サービスの申し込み時に、虚偽の入力、入力誤りがあったとき又は入力もれがあったとき
3. その他、当社が不適当と判断したとき
第6条（本サービスの料金）
本サービスの利用料金は、無料とします。

第7条（中断・廃止）
当社は、次のいずれかに該当すると判断した場合、利用者への事前の連絡又は承諾を要することなく、本サービスを一時的に中断できるものとします。

（1） 本サービスの提供に必要な設備の故障等により保守を行う場合
（2） 不可抗力により本サービスを提供できない場合
（3） 本サービスの提供に必要なデータのバックアップ等を行なう場合
（4） その他、運用上又は技術上の理由でやむを得ない場合
第8条 （広告等）
当社は、本サービスのページ上に第三者の提供する広告を掲載することがあります。なお、当該広告は広告提供者の責任で掲載されるものであって、当社はその正確性、適法性等について保証するものではなく、一切責任を負わないものとします。

第9条（個人情報）
当社は、本サービスにおける個人を特定する情報(以下｢個人情報｣といいます。)は、以下のとおり取り扱うものとします。

（1） 当社取扱商品に関するご連絡、ご通知、資料送付の為
（2） 当社からの情報提供の為
（3） 当社取扱商品の情報、キャンペーン情報（広告含む）のご案内、資料送付の為
（4） お問い合わせいただいた「ご質問・ご意見等」に対して、当社よりご連絡をさせていただく為
（5） 本サービスのご利用においてのお問い合わせ・発生したトラブル等に対して、当社よりご連絡させていただく為
（6） 本サービスを円滑に運営する為に一定期間の保管をする為
（7） 当社のマーケティングデータとして、個人が特定できない形での利用をする為
第10条（禁止行為）
利用者は、本サービスの利用にあたり、次の各項に定める行為をしてはならないものとします。

（1） 本サービスに関する情報を改ざんする行為
（2） 利用者以外の者になりすまして本サービスを利用する行為
（3） 有害なコンピュータープログラム等を送信又は書き込む行為
（4） 第三者又は当社の財産、名誉及びプライバシー等を侵害する行為
（5） 本人の同意を得ることなく又は詐欺的な手段により第三者又は当社の個人情報を収集する行為
（6） 本サービスの利用又は提供を妨げる行為
（7） 第三者又は当社の著作権その他の知的財産権を侵害する行為
（8） 法令又は公序良俗に反する行為
（9） 本サービスを利用した営業活動その他営利を目的とする行為
（10） 当社の信用を傷つけ、又は当社に損害を与える行為
（11） その他、当社が不適切と判断した行為
第11条（責任の範囲）
当社は、第5条又は次の各項に定める事由により、利用者又は第三者（他の利用者を含む）が損害を被った場合であっても、一切責任を負わないものとします。

（1） 利用者設備の不具合等により、本サービスを利用できなかった場合
（2） 利用者が本規約に違反した場合
（3） 紛争又は損害の原因が当社の責に帰すべき事由による場合を除き、本サービスの利用によって利用者と第三者との間で紛争が生じた場合又は利用者が第三者に損害を与えた場合
（4） その他本サービスを利用することにより、当社の責によらずして利用者又は第三者に損害が発生した場合
第12条（本規約に定めのない事項）
本規約に定めのない事項その他本規約の条項に関し疑義を生じたときは、協議のうえ円満に解決を図るものとします。

第13条（問合せ先）
本サービスにかかる問合せ先は、以下の通りです。

株式会社　ＳＥＩＭＵ
電話：06-6914-7160
FAX：06-6914-7161</Text>
                </ScrollView>
            </View>
        );
    }
    
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
});