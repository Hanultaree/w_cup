function wcmain(){
	$( function() {
		$('#ifm1').empty(); $('#ifm1').append("제"+rnd+"회");
		$('#ifm2').empty(); $('#ifm2').append(qp[0]);
		drawt();  //--- 토너먼트 대진표 출력(blank)

		setTimeout(function() {
			grpmk();  //--- 조별리그 성적 순위표 배열(blank)

			switch ( sele )
			{
				case "1" :
					grppnt(4,2,grp_nfo,"1차리그",4,"#out3");  //--- 조별 리그 순위표 배열(grp_nfo) 성적/점수 계산 및 갱신 (16팀 참가) (승점2)
					grprk(grp_nfo,4,4,"2","n");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
					edrk(grp_nfo,4,2,"");  //--- 조별리그 순위규칙 (1,2위 선발) n: 조의 수, pk: 1,2위선발
					grptna(16);
					break;
				case "2" :
					grppnt(4,2,grp_nfo,"1차리그",4,"#out3");  //--- 조별 리그 순위표 배열(grp_nfo) 성적/점수 계산 및 갱신 (16팀 참가) (승점2)
					grprk(grp_nfo,4,4,"3","n");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
					edrk(grp_nfo,4,2,"");  //--- 조별리그 순위규칙 (1,2위 선발) n: 조의 수, pk: 1,2위선발
					grptna(16);
					break;
				case "3" :
					$("#out3a").show();
					grppnt(4,2,grp_nfo,"1차리그",4,"#out3");  //--- 조별 리그 순위표 배열(grp_nfo) 성적/점수 계산 및 갱신 (16팀 참가) (승점2)
					grprk(grp_nfo,4,4,"3","n");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
					edrk(grp_nfo,4,2,"2차1");  //--- 조별리그 순위규칙 (1,2위 선발) n: 조의 수
					setTimeout(function() {
						grpmk2();  //--- grp_nfos 배열만들기
						grppnts2(4,4,2,4);  //--- ( a: 1차리그조 수, b: 팀 수, c: 2차리그조 수, d: 팀 수)
						grprk(grp_nfos,2,4,"3","n");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
						edrk(grp_nfos,2,2,"2차2");  //--- 조별리그 순위규칙 (1,2위 선발) n: 조의 수
						grptna(26);
					}, 10);
					break;
				case "4" :
					$("#out3a").show();
					grppnt(6,2,grp_nfo,"1차리그",4,"#out3");  //--- 조별 리그 순위표 배열(grp_nfo) 성적/점수 계산 및 갱신 (24팀 참가) (승점2)
					grprk(grp_nfo,6,4,"3","n");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
					edrk(grp_nfo,6,2,"2차1");  //--- 조별리그 순위규칙 (1,2위 선발) n: 조의 수
					setTimeout(function() {
						grpmk2();
						grppnts2(6,4,4,3);  //--- ( a: 1차리그조 수, b: 팀 수, c: 2차리그조 수, d: 팀 수)
						grprk(grp_nfos,4,3,"3","n");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
						edrk(grp_nfos,4,1,"2차2");  //--- 조별리그 순위규칙 (1,2위 선발) n: 조의 수
						grptna(24);
					}, 10);
					break;
				case "5" :
					grppnt(6,2,grp_nfo,"1차리그",4,"#out3");  //--- 조별 리그 순위표 배열(grp_nfo) 성적/점수 계산 및 갱신 (24팀 참가) (승점2)
					grprk(grp_nfo,6,4,"3","y");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
					edrk1(6);  //--- 조별리그 순위규칙 (1,2위 + 3위 추가 선발) n: 조의 수
					grptna(0);
					break;
				case "6" :
					grppnt(6,2,grp_nfo,"1차리그",4,"#out3");  //--- 조별 리그 순위표 배열(grp_nfo) 성적/점수 계산 및 갱신 (24팀 참가) (승점2)
					grprk(grp_nfo,6,4,"4","y");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
					edrk1(6);  //--- 조별리그 순위규칙 (1,2위 + 3위 추가 선발) n: 조의 수
					grptna(0);
					break;
				case "7" :
					grppnt(6,3,grp_nfo,"1차리그",4,"#out3");  //--- 조별 리그 순위표 배열(grp_nfo) 성적/점수 계산 및 갱신 (24팀 참가) (승점3)
					grprk(grp_nfo,6,4,"4","y");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
					edrk1(6);  //--- 조별리그 순위규칙 (1,2위 + 3위 추가 선발) n: 조의 수
					grptna(0);
					break;
				case "8" :
					grppnt(8,3,grp_nfo,"1차리그",4,"#out3");  //--- 조별 리그 순위표 배열(grp_nfo) 성적/점수 계산 및 갱신 (32팀 참가) (승점3)
					grprk(grp_nfo,8,4,"4","n");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
					edrk(grp_nfo,8,2,"");  //--- 조별리그 순위규칙 (1,2위 선발) n: 조의 수
					grptna(0);
					break;
				case "9" :
					grppnt(8,3,grp_nfo,"1차리그",4,"#out3");  //--- 조별 리그 순위표 배열(grp_nfo) 성적/점수 계산 및 갱신 (32팀 참가) (승점3)
					grprk(grp_nfo,8,4,"5","n");  //--- n: 조의 수, r: 순위규칙, c: 3위선발("y" or "n")
					edrk(grp_nfo,8,2,"");  //--- 조별리그 순위규칙 (1,2위 선발) n: 조의 수
					grptna(0);
					break;
			};
		}, 650);
		setTimeout(function() {
			if (sele>"7"){
				m8(16);
				skd(16);  //--- 경기 일정표 출력 (조별리그 팀이름 배정)
			}else{
				if (sele>"4"){
					m8(16);
					skd(16);
				}else{
					if (sele<"3"){
						m8b(8);
						skd(8);
					}else{
						m8c();
						skd(4);
					};
				};
			};
		}, 700);
		setTimeout(function() {
			if (count_a==6){$("#A1").css("color","blue"); $("#A2").css("color","blue"); $("#A3").css("color","blue");}; if (count_b==6){$("#B1").css("color","blue"); $("#B2").css("color","blue"); $("#B3").css("color","blue");};
			if (count_c==6){$("#C1").css("color","blue"); $("#C2").css("color","blue"); $("#C3").css("color","blue");}; if (count_d==6){$("#D1").css("color","blue"); $("#D2").css("color","blue"); $("#D3").css("color","blue");};
			if (count_e==6){$("#E1").css("color","blue"); $("#E2").css("color","blue"); $("#E3").css("color","blue");}; if (count_f==6){$("#F1").css("color","blue"); $("#F2").css("color","blue"); $("#F3").css("color","blue");};
			if (count_g==6){$("#G1").css("color","blue"); $("#G2").css("color","blue");}; if (count_h==6){$("#H1").css("color","blue"); $("#H2").css("color","blue");};
			if (count_p>2){$("#P1").css("color","blue"); $("#P2").css("color","blue");}; if (count_q>2){$("#Q1").css("color","blue"); $("#Q2").css("color","blue");};
			if (count_r>2){$("#R1").css("color","blue");}; if (count_s>2){$("#S1").css("color","blue");};
		}, 800);
	});
};

//--- ■■■■■■■■■■■■■■■■■■■■■■■■
//--- 해당년도 w_cup22, grp_league22 배열 만들기
function selec(yrs){
	$( function() {
		grp_league22 = $.map(grp_league, function(element, index) {
			if (element[0] == "년도" || element[0] == yrs) {
				return [element]
			};
		});

		w_cup22 = $.map(w_cuptm, function(element, index) {
			if (element[0] == "year" || element[0] == yrs) {
				return [element]
			};
		});
	});
};

//--- 조별 리그 순위표(grp_nfo) 배열작성 (blank)
function grpmk(){
	grp_nfo = []; let tl = "경고";
	for (i=1; i<w_cup22.length; i++){  
		n = i % 4; if (sele=="3" || sele=="4"){ tl = ""; };
		if (n==1)	{ grp_nfo.push( [w_cup22[i][1].substr(0,1) + "00", w_cup22[i][1].substr(0,1) + "조", w_cup22[i][2], w_cup22[i+1][2], w_cup22[i+2][2], w_cup22[i+3][2],"승점","득실","득점",tl,"순위","실점","국기"], );	};
		if (i==w_cup22.length-1){ grp_nfo.push( [w_cup22[i][1], w_cup22[i][2],"","","","","","","","","","", w_cup22[i][3] ] ); }else{ grp_nfo.push( [w_cup22[i][1], w_cup22[i][2],"","","","","","","","","","", w_cup22[i][3] ], ); };
	};
};

//--- 조별 2차리그 순위표(grp_nfos2) 배열작성 (blank)
function grpmk2(){  
		grp_nfos = []; grp_nfos2 = [];
	if (sele=="3"){
		tmpi = '1_4_5_8_2_3_6_7'.split("_");
		for (i=0; i<8; i++){
			ix = Number(tmpi[i])-1;
			grp_nfos2.push(grp_nfos1[ix]);
		};
		for (i=0; i<8; i++){
			j= i % 4; k = parseInt(i/4); if (k==0){ grc = "P0"; }; if (k==1){ grc = "Q0"; }; //if (k==2){ grc = "R0"; }; if (k==3){ grc = "S0"; };
			if (j==0)	{ grp_nfos.push( [grc+j, grc.substr(0,1)+"조", grp_nfos2[i][1], grp_nfos2[i+1][1], grp_nfos2[i+2][1], grp_nfos2[i+3][1],"승점","득실","득점","1차","순위","실점","국기"], );};
			if (i==grp_nfos2.length-1){ grp_nfos.push( [grc+(j+1), grp_nfos2[i][1],"","","","","","","",grp_nfos2[i][10],"","", grp_nfos2[i][12] ] ); }else{ grp_nfos.push( [grc+(j+1), grp_nfos2[i][1],"","","","","","","",grp_nfos2[i][10],"","", grp_nfos2[i][12] ], ); };
		};
	};
	if (sele=="4"){
		tmpi = '1_5_12_3_7_10_2_6_11_4_8_9'.split("_");
		for (i=0; i<12; i++){
			ix = Number(tmpi[i])-1;
			grp_nfos2.push(grp_nfos1[ix]);
		};
		for (i=0; i<12; i++){
			j= i % 3; k = parseInt(i/3); if (k==0){ grc = "P0"; }; if (k==1){ grc = "Q0"; }; if (k==2){ grc = "R0"; }; if (k==3){ grc = "S0"; };
			if (j==0)	{ grp_nfos.push( [grc+j, grc.substr(0,1)+"조", grp_nfos2[i][1], grp_nfos2[i+1][1], grp_nfos2[i+2][1], "","승점","득실","득점","1차","순위","실점","국기"], );};
			if (i==grp_nfos2.length-1){ grp_nfos.push( [grc+(j+1), grp_nfos2[i][1],"","","","","","","",grp_nfos2[i][10],"","", grp_nfos2[i][12] ] ); }else{ grp_nfos.push( [grc+(j+1), grp_nfos2[i][1],"","","","","","","",grp_nfos2[i][10],"","", grp_nfos2[i][12] ], ); };
		};
	};
};

//--- 토너먼트 대진표 그리기 (blank)
function drawt(){
	$( function() {
		ttxt = '<div id="t33">' + yrs + ' 월드컵축구 대진표 (제' + rnd + '회)</br><span class="t35">- 우 승 : </span><span id="t35" class="t36"></span></br><span class="t35">-준우승:</span><span id="t36" class="t36"></span></br><span class="t35">- 3 위 : </span><span id="t37" class="t36"></span></br><span class="t35">- 4 위 : </span><span id="t38" class="t36"></span></div>';
		if (sele==1){
			if (rnd==5 || rnd==6){ ttxt += '<div id="t34" class="t37">※ 8강 진출방법</br> ① 각조 1,2위</br>  - 승점(2,1,0) </br>  - play-off</div>'; };
			if (rnd==7 || rnd==8){ ttxt += '<div id="t34" class="t37">※ 8강 진출방법</br> ① 각조 1,2위</br>  - 승점(2,1,0) </br>  - 득실차</div>'; };
		};
		if (sele==2){ ttxt += '<div id="t34" class="t37">※ 8강 진출방법</br> ① 각조 1,2위</br>  - 승점(2,1,0) </br>  - 득실차</br>  - 다득점</div>'; };
		if (sele==3){ ttxt += '<div id="t34" class="t37">※ 8강 진출방법</br> ① 1차리그 각조 1,2위</br>  - 승점(2,1,0) </br>  - 득실차</br>  - 다득점</br> ② 2차리그 각조 1,2위</br> ③ 1위팀: 결승 </br>  - 2위팀: 34위전</div>'; };
		if (sele==4){ ttxt += '<div id="t34" class="t37">※ 8강 진출방법</br> ① 각조 1,2위</br>  - 승점(2,1,0) </br>  - 득실차</br>  - 다득점</br> ② 2차리그 각조 1위</br> ③ 4강 토너먼트 </div>'; };
		if (sele==5){ ttxt += '<div id="t34" class="t37">※ 16강 진출방법</br> ① 각조 1,2,+α3위</br>  - 승점(2,1,0) </br>  - 득실차</br>  - 다득점</div>'; };
		if (sele==6){ ttxt += '<div id="t34" class="t37">※ 16강 진출방법</br> ① 각조 1,2,+α3위</br>  - 승점(2,1,0) </br>  - 득실차</br>  - 다득점</br>  - 승자승</div>'; };
		if (sele==7){ ttxt += '<div id="t34" class="t37">※ 16강 진출방법</br> ① 각조 1,2,+α3위</br>  - 승점(3,1,0) </br>  - 득실차</br>  - 다득점</br>  - 승자승</div>'; };
		if (sele==8){ ttxt += '<div id="t34" class="t37">※ 16강 진출방법</br> ① 각조 1,2위</br>  - 승점(3,1,0) </br>  - 득실차</br>  - 다득점</br>  - 승자승</div>'; };
		if (sele==9){ ttxt += '<div id="t34" class="t37">※ 16강 진출방법</br> ① 각조 1,2위</br>  - 승점(3,1,0) </br>  - 득실차</br>  - 다득점</br>  - 승자승</br>  - 페어플레이</div>'; };

		$('#out1').removeClass('tourn4 tourn8 tourn16'); 
		$('#out1').empty();
		if (sele>"4"){ 
			$('#out1').addClass('tourn16'); 
			drw_tn16();
		}else{
			if (sele=="4" || sele=="3"){ 
				$('#out1').addClass('tourn4'); 
				drw_tn4();
			}else{
				if (sele<"3"){ 
					$('#out1').addClass('tourn8'); 
					drw_tn8();
				};
			};
		};
		$('#out1').empty();
		$("#out1").append(ttxt);
	});
};

//--- 4팀 토너먼트 (drw_tn4();) 용 대진표 그리기
function drw_tn4(){
	if (sele=="4"){
		for (i=1; i<9; i++){
			if (i<5){ cla = "t16"; ida = "t40" + i;
			}else{ if (i==7){ cla = "t34"; ida = "t4" + (i+24);
				}else{	cla = "t8";  ida = "t4" + (i+24);};
			};
			ttxt += '<div id="' + ida + '" class="' + cla + '">' + qp[i] + '</div>';
		};
		ttxt += '<div id="t431a" class="t34"></div><div id="t431b" class="t34"></div>';
	}else{
		for (i=1; i<7; i++){
			if (i<5){ cla = "t16"; ida = "t40" + i;
			}else{ 
				if (i==5){ 
					ttxt += '<div id="t429" class="t8"></div><div id="t430" class="t8"></div>';
					cla = "t34"; ida = "t4" + (i+26);
				}else{	cla = "t8";  ida = "t4" + (i+26); };
			};
			ttxt += '<div id="' + ida + '" class="' + cla + '">' + qp[i] + '</div>';
		};
		ttxt += '<div id="t431a" class="t34"></div><div id="t431b" class="t34"></div>';
	};
};

//--- 8팀 토너먼트 (drw_tn8();) 용 대진표 그리기
function drw_tn8(){
	for (i=1; i<17; i++){
		if (i<9){ cla = "t16"; ida = "t80" + i;
		}else{ if (i<13){ cla = "t8"; ida = "t8" + (i+16);
			}else{if (i==15){ 	cla = "t34"; ida = "t8" + (i+16);
				}else{	cla = "t4"; ida = "t8" + (i+16);};};
		};
		ttxt += '<div id="' + ida + '" class="' + cla + '">' + qp[i] + '</div>';
	};
	ttxt += '<div id="t831a" class="t34"></div><div id="t831b" class="t34"></div>';
};

//--- 16팀 토너먼트 (drw_tn16();) 용 대진표 그리기
function drw_tn16(){
	for (i=1; i<33; i++){
		if (i<10){ ida = "t0" + i; }else{ ida = "t" + i; };
		if (i<17){ cla = "t16"; 
		}else{ if (i<25){ cla = "t8"; 
			}else{if (i==31){ cla = "t34"; 
				}else{	cla = "t4"; };};
		};
		ttxt += '<div id="' + ida + '" class="' + cla + '">' + qp[i] + '</div>';
	};
	ttxt += '<div id="t31a" class="t34"></div><div id="t31b" class="t34"></div>';
};

//--- 조별 리그 순위표 출력 / 갱신 (양식)
function optt(a,b,c,destin){    
	$( function() {
		out_string = ""; rda = "";
		out_string += '<span class="gr">' + b + '</span>';
		for (i=0; i<a.length; i++){
			d = i % (c+1);
			for (j=1; j<a[i].length-2; j++){
			if (i==0){
					if (j==1){
						out_string += '<span class="gr1 gr0 grt">' + a[i][j];
					}else{
						if (j==a[i].length-3){
							out_string += '</span><span class="gr1 gr0">' + a[i][j];
						}else{
							out_string += '</span><span class="gr1 gr0">' + a[i][j];
						};
					};
				}else{
					if (j==1){
						if (d==0){ 
							out_string += '</span><span class="gr1 gr0 grt">' + a[i][j];
						}else{
							out_string += '</span><span class="gr1 grt">' + a[i][j];
						};
					}else{
						if (d==0){ 
							out_string += '</span><span class="gr1 gr0">' + a[i][j];
						}else{
							if (d>0 && j==d+1){
								out_string += '</span><span class="gr1 grx">' + a[i][j];
							}else{
								out_string += '</span><span class="gr1">' + a[i][j];
							};
						};
					};
				};
			};
		};
		out_string += "</span>";
		$(destin).empty();
		$(destin).append(out_string);
	});
};

//--- 조별 리그 순위표 배열(grp_nfo) 성적/점수 계산 및 갱신
function grppnt(a,b,arnm,c,e,destin){  //--- grppnt(a,b) a: 리그조 수, b: 승점(2 or 3), arnm: 저장할 배열이름, c: "1차리그", destin: 출력위치, e: 조당팀 수
	$( function() {
		if (rnd==5){ count_a=2; count_b=2; count_c=2; count_d=2; };
		if (sele<"9"){ wng = "-";}else{ wng = grp_league22[i][9].split(":");};  //--- 경기score, 경고수
		if (sele=="3"){ zz=24;}; if (sele=="4"){ zz=36;}; 
		for (i=0; i<(zz+po+1); i++){
			scor = []; score = [];
			if (grp_league22[i][8].includes("_")){ scor = grp_league22[i][8].split("_"); score = scor[scor.length-1].split(":"); }else{ score = grp_league22[i][8].split(":");}; 
			r = 0; s = 0; tsc = ""; 
			if (i<(zz+1) && score.length==2){  //--- 경기score가 입력되면
				if (grp_league22[i][6].substr(0,1)=="A"){count_a++; count = count_a;}; if (grp_league22[i][6].substr(0,1)=="B"){count_b++; count = count_b;}; 
				if (grp_league22[i][6].substr(0,1)=="C"){count_c++; count = count_c;}; if (grp_league22[i][6].substr(0,1)=="D"){count_d++; count = count_d;}; 
				if (grp_league22[i][6].substr(0,1)=="E"){count_e++; count = count_e;}; if (grp_league22[i][6].substr(0,1)=="F"){count_f++; count = count_f;}; 
				if (grp_league22[i][6].substr(0,1)=="G"){count_g++; count = count_g;}; if (grp_league22[i][6].substr(0,1)=="H"){count_h++; count = count_h;}; 
				point = 0;
				j=Number(grp_league22[i][7].substr(1,1)); k=Number(grp_league22[i][7].substr(2,1));  //--- 각조 팀번호
				if (grp_league22[i][7].substr(0,1)=="A"){m=0}; if (grp_league22[i][7].substr(0,1)=="B"){m=5;}; if (grp_league22[i][7].substr(0,1)=="C"){m=10;}; if (grp_league22[i][7].substr(0,1)=="D"){m=15;};
				if (grp_league22[i][7].substr(0,1)=="E"){m=20;}; if (grp_league22[i][7].substr(0,1)=="F"){m=25;}; if (grp_league22[i][7].substr(0,1)=="G"){m=30;}; if (grp_league22[i][7].substr(0,1)=="H"){m=35;};
				if (Number(score[0]) > Number(score[1]))	{ point = b; point1 = 0;}; if (Number(score[0]) == Number(score[1])){ point = 1; point1 = 1;}; 
				if (Number(score[0]) < Number(score[1])) { point = 0; point1 = b;}; //--- 승점

				r = j+m; s = k+1; tsc = score[0] + ":" + score[1]; arnm[r].splice(s, 1, tsc);  //--- score 저장 (table에 기록)
				psm = Number(arnm[r][6]) + point; arnm[r].splice(6,1,psm);  //--- 승점 누적 (table에 기록)
				pd = Number(arnm[r][7]) + Number(score[0]) - Number(score[1]); arnm[r].splice(7,1,pd);  //--- 득실차 누적 (table에 기록)
				so = Number(arnm[r][8]) + Number(score[0]); arnm[r].splice(8,1,so);   //--- 득점 누적 (table에 기록)
				sl = Number(arnm[r][11]) + Number(score[1]); arnm[r].splice(11,1,sl);   //--- 실점 누적 (table에 기록)
				if (sele=="9"){wg =  Number(arnm[r][9]) + Number(wng[0]); arnm[r].splice(9,1,wg); };  //--- 경고 누적 (table에 기록)

				r = k+m; s = j+1; tsc = score[1] + ":" + score[0]; arnm[r].splice(s, 1, tsc);  //--- score 저장 (table에 기록)
				psm = Number(arnm[r][6]) + point1; arnm[r].splice(6,1,psm);  //--- 승점 누적 (table에 기록)
				pd = Number(arnm[r][7]) + Number(score[1]) - Number(score[0]); arnm[r].splice(7,1,pd);  //--- 득실차 누적 (table에 기록)
				so = Number(arnm[r][8]) + Number(score[1]); arnm[r].splice(8,1,so);   //--- 득점 누적 (table에 기록)
				sl = Number(arnm[r][11]) + Number(score[0]); arnm[r].splice(11,1,sl);   //--- 실점 누적 (table에 기록)
				if (sele=="9"){wg =  Number(arnm[r][9]) + Number(wng[1]); arnm[r].splice(9,1,wg); };  //--- 경고 누적 (table에 기록)
			};
			if (po>0){
				if (i>zz && i<(zz+po+1)){  //--- 8강 토너 진출을 위한 play-off 결과 계산
					point = 0; point1 = 0; 
					j=Number(grp_league22[i][7].substr(1,1)); k=Number(grp_league22[i][7].substr(2,1));  //--- 각조 팀번호
					if (grp_league22[i][7].substr(0,1)=="A"){m=0}; if (grp_league22[i][7].substr(0,1)=="B"){m=5;}; if (grp_league22[i][7].substr(0,1)=="C"){m=10;}; if (grp_league22[i][7].substr(0,1)=="D"){m=15;};
					if (grp_league22[i][7].substr(0,1)=="E"){m=20;}; if (grp_league22[i][7].substr(0,1)=="F"){m=25;};
					if (score[0] > score[1])	{ point = 0.1; point1 = 0;}; if (score[0] < score[1]){ point = 0; point1 = 0.1;}; //--- 승점 (조 순위결정을 위한 play-off점수)

					r = j+m; s = k+1; //tsc = score[0] + ":" + score[1]; arnm[r].splice(s, 1, tsc);  //--- score 저장 (table에 기록)
					psm = Number(arnm[r][6]) + point; arnm[r].splice(6,1,psm);  //--- 승점 누적 (table에 기록)

					r = k+m; s = j+1; //tsc = score[1] + ":" + score[0]; arnm[r].splice(s, 1, tsc);  //--- score 저장 (table에 기록)
					psm = Number(arnm[r][6]) + point1; arnm[r].splice(6,1,psm);  //--- 승점 누적 (table에 기록)
				};
			};
		};
		optt(arnm,c,e,destin);
	});
};
			
function grptna(c){  //--- (16강 토너먼트)  grptna(a) a: 리그조 수 
	$( function() {
		for (i=zz+po+1; i<grp_league22.length; i++){
			scor = []; score = [];
			if (grp_league22[i][8].includes("_")){ scor = grp_league22[i][8].split("_"); score = scor[scor.length-1].split(":"); }else{ score = grp_league22[i][8].split(":");}; 
			if (sele=="1" || sele=="2"){ pfx="#t8";};
			if (sele=="3" || sele=="4"){ pfx="#t4";};
			if (sele>"4"){ pfx="#t";};
			des = pfx + qp.indexOf("w"+(i+zz1));  //--- ③des
			tim = "<span>" + grp_league22[i][1].substr(0,5) + " " + grp_league22[i][2].substr(0,5) + "</br>";
			if (grp_league22[i][8].includes("_")){ tim += scor[0];
				for (j=1; j<scor.length; j++){tim += "</br>(" + scor[j] + ")"; }
			}else{ tim += grp_league22[i][8] + "</span>"; }; 
			$(des).empty();
			$(des).append(tim);  //--- 토너먼트 경기 일시 출력
		};
	});
};

function grppnts2(a,b,c,d){  //--- 2차 조별리그  ( a: 1차리그조 수, b: 팀 수, c: 2차리그조 수, d: 팀 수)
	$( function() {
		if (sele=="3"){ zz2=24; zz=36;}; if (sele=="4"){ zz2=36; zz=48;}; 
		for (i=zz2+1; i<zz+1; i++){
			if (grp_league22[i][8].includes("_")){ scor = grp_league22[i][8].split("_"); score = scor[scor.length-1].split(":"); }else{ score = grp_league22[i][8].split(":");}; 
			r = 0; s = 0; tsc = ""; wng = "-";  //--- 경기score, (경고수는 불필요)
			if (score.length==2){  //--- 경기score가 입력되면
				if (grp_league22[i][6].substr(0,1)=="P"){count_p=6; count = count_p;}; if (grp_league22[i][6].substr(0,1)=="Q"){count_q=6; count = count_q;}; 
				if (grp_league22[i][6].substr(0,1)=="R"){count_r=6; count = count_r;}; if (grp_league22[i][6].substr(0,1)=="S"){count_s=6; count = count_s;}; 
				point = 0; point1 = 0; 
				j=Number(grp_league22[i][7].substr(1,1)); k=Number(grp_league22[i][7].substr(2,1));  //--- 각조 팀번호
				if (sele=="3"){ if (grp_league22[i][7].substr(0,1)=="P"){m=0}; if (grp_league22[i][7].substr(0,1)=="Q"){m=5;}; };
				if (sele=="4"){ if (grp_league22[i][7].substr(0,1)=="P"){m=0}; if (grp_league22[i][7].substr(0,1)=="Q"){m=4;}; if (grp_league22[i][7].substr(0,1)=="R"){m=8;}; if (grp_league22[i][7].substr(0,1)=="S"){m=12;};};
				if (score[0] > score[1])	{ point = 2; point1 = 0;}; if (score[0] == score[1]){ point = 1; point1 = 1;}; if (score[0] < score[1]){ point = 0; point1 = 2;}; //--- 승점

				r = j+m; s = k+1; tsc = score[0] + ":" + score[1]; grp_nfos[r].splice(s, 1, tsc);  //--- score 저장 (table에 기록)
				psm = Number(grp_nfos[r][6]) + point; grp_nfos[r].splice(6,1,psm);  //--- 승점 누적 (table에 기록)
				pd = Number(grp_nfos[r][7]) + Number(score[0]) - Number(score[1]); grp_nfos[r].splice(7,1,pd);  //--- 득실차 누적 (table에 기록)
				so = Number(grp_nfos[r][8]) + Number(score[0]); grp_nfos[r].splice(8,1,so);   //--- 득점 누적 (table에 기록)

				r = k+m; s = j+1; tsc = score[1] + ":" + score[0]; grp_nfos[r].splice(s, 1, tsc);  //--- score 저장 (table에 기록)
				psm = Number(grp_nfos[r][6]) + point1; grp_nfos[r].splice(6,1,psm);  //--- 승점 누적 (table에 기록)
				pd = Number(grp_nfos[r][7]) + Number(score[1]) - Number(score[0]); grp_nfos[r].splice(7,1,pd);  //--- 득실차 누적 (table에 기록)
				so = Number(grp_nfos[r][8]) + Number(score[1]); grp_nfos[r].splice(8,1,so);   //--- 득점 누적 (table에 기록)
			};
		};
		optt(grp_nfos,"2차리그",d,"#out3a");
	});
};

//--- 조별 순위계산 (poin배열) 
let z = 0; let rdata = new Array; let poin = new Array; let poin3 = new Array; let tn16 = "";
function grprk(ain,n,d,r,c){  //--- ain: input, n: 조의 수,  r: 순위규칙("1" 승점, "2" +득실차, "3" +다득점, "4" +승자승, "5" +페어플레이), c: 3위선발("y" or "n") ______ grprk(grp_nfo,4,3,"3","n")
	$( function() {
		poin = []; poin3 = [];
		for (z=1; z<(n+1); z++){
			rdata = []; tn16 = ""; 
			w = (z-1) * (d+1);
			for (p=1; p<(d+1); p++){ 
				rdata.push( [ain[w+p][0], Number(ain[w+p][6]), Number(ain[w+p][7]), Number(ain[w+p][8]), 0, Number(ain[w+p][9]) ], );  //--- 승점,득실,득점,경고
			};
			if (r>"4"){rdata.sort((a, b) => (a[5] - b[5]));};   //--- 오름차순 정렬 (경고)
			if (r>"3"){rdata.sort((a, b) => (b[4] - a[4]));};   //--- 내림차순 정렬 (승자승)
			if (r>"2"){rdata.sort((a, b) => (b[3] - a[3]));};   //--- 내림차순 정렬 (다득점)
			if (r>"1"){rdata.sort((a, b) => (b[2] - a[2]));};   //--- 내림차순 정렬 (득실차)
			if (r>"0"){rdata.sort((a, b) => (b[1] - a[1]));};   //--- 내림차순 정렬 (승점)
			poin.push(rdata);
		};
		if (r>"3"){  //--- 승자승 적용하는 경우
			for (j=0; j<n; j++){  //--- 리그 조 숫자 (8 or 6)
				for (k=0; k<3; k++){
					if (poin[j][k][1]==poin[j][k+1][1] && poin[j][k][2]==poin[j][k+1][2] && poin[j][k][3]==poin[j][k+1][3]){  //--- 승점,득실,득점 모두 같으면 (승자승)적용
						pt1 = Number(poin[j][k][0].substr(2,1)) + j * 5;
						pt2 = Number(poin[j][k+1][0].substr(2,1)) + 1;
						sco = ain[pt1][pt2].split(":");
						wn = Number(sco[0]) - Number(sco[1]); 
						poin[j][k].splice(4,1,wn); 
					};
				};
			};
			for (y=0; y<n; y++){  //--- 승자승 적용하여 다시 정렬
				if (r>"4"){poin[y].sort((a, b) => (a[5] - b[5]));};   //--- 오름차순 정렬 (경고)
				if (r>"3"){poin[y].sort((a, b) => (b[4] - a[4]));};   //--- 내림차순 정렬 (승자승)
				if (r>"2"){poin[y].sort((a, b) => (b[3] - a[3]));};   //--- 내림차순 정렬 (다득점)
				if (r>"1"){poin[y].sort((a, b) => (b[2] - a[2]));};   //--- 내림차순 정렬 (득실차)
				if (r>"0"){poin[y].sort((a, b) => (b[1] - a[1]));};   //--- 내림차순 정렬 (승점)
			};
		};
		if (c=="y"){  //--- 3위팀 선발하는 경우
			for (g=0; g<n; g++){poin3.push(poin[g][2]);};  //--- 각조 3위 6팀중 성적에 따라 4팀 16강 합류
			poin3.sort((a, b) => (b[3] - a[3]));   //--- 내림차순 정렬 (다득점)
			poin3.sort((a, b) => (b[2] - a[2]));   //--- 내림차순 정렬 (득실차)
			poin3.sort((a, b) => (b[1] - a[1]));   //--- 내림차순 정렬 (승점)
			for (i=0; i<n; i++){
				for (j=0; j<2; j++){
					tn16 += poin[i][j][0] + "_";
				};
			};
			tn16 += poin3[0][0] + "_" + poin3[1][0] + "_" + poin3[2][0] + "_" + poin3[3][0];
		};
	});
};

//--- A1~H2 gr_nfo순위입력, 일정표16강 팀기록, 토너먼트표 팀기록
function edrk(ain,n,pk,aot){  //--- 조별리그 순위규칙 (1,2위 선발) n: 조의 수, ain: input배열, aot: output배열 _____ edrk(grp_nfo,4,grp_nfos),  edrk(grp_nfos,2,2,"2차");
	$( function() {
		grp_nfos1 = []; 
		t = ""; 
		for (j=0; j<n; j++){   //--- n: 조의 수
			for (k=0; k<pk; k++){  //--- 1,2위 선발
				for (i=0; i<ain.length; i++){
					if (ain[i][0]==poin[j][k][0]){
						t = poin[j][k][0].substr(0,1) + (k+1);
						ain[i].splice(10,1,t);  //--- A1, A2 .... (ain 배열에 입력) -- 중간순위, count==6이면 확정순위
						if (sele=="1" || sele=="2"){
							if (qp.indexOf(t)<10){ des= "#t80" + qp.indexOf(t) ; }else{ des= "#t8" + qp.indexOf(t); }; 
						}else{
							if (sele=="3" || sele=="4"){des= "#t40" + qp.indexOf(t);
							}else{ if (qp.indexOf(t)<10){ des= "#t0" + qp.indexOf(t) ; }else{ des= "#t" + qp.indexOf(t); }; 
							};
						};
						if (aot == "2차1"){
							grp_nfos1.push(ain[i]);
						}else{

//							$(des).append('</br><img src="./n_flag/' + ain[i][12] + '.gif" width=26px style="border: 1px solid #E8E8E8"></br></br><span class="s16">' + ain[i][1] + '</span>');  //--- 토너먼트 대진표에 팀이름 출력
							$(des).append('</br><img src="https://api.fifa.com/api/v3/picture/flags-sq-2/' + ain[i][12] + '" width=26px style="border: 1px solid #E8E8E8"></br></br><span class="s16">' + ain[i][1] + '</span>');  //--- 토너먼트 대진표에 팀이름 출력
							data = $.map(grp_league22, function(element, index) {  //--- w49 이후 부분배열
								if (element[6].includes("w")) {
									return [element]
								};
							});
							subj = t; 
							temp = data.filter(isFind7); 
							b = Number(temp[0][6].substr(1,2))-zz1;
							if (subj==temp[0][7].substr(0,2)){a = 4;}; if (subj==temp[0][7].substr(2,2)){a = 5;};
							grp_league22[b].splice(a, 1, ain[i][1]);  //--- 16강 팀이름 입력
						};
					};
				};
			};
		};
	});
};
//--- A1~F3 gr_nfo순위입력, 일정표16강 팀기록, 토너먼트표 팀기록
function edrk1(n){  //--- 조별리그 순위규칙 (1,2위 + 3위 추가 선발) n: 조의 수
	$( function() {
		for (i=0; i<grp_nfo.length; i++){
			for (j=0; j<n; j++){  //--- n: 조의 수
				for (k=0; k<3; k++){  //--- 1,2위 + 3위중 4팀 선발
					if (grp_nfo[i][0]==poin[j][k][0] && tn16.includes(grp_nfo[i][0])){
						t = poin[j][k][0].substr(0,1) + (k+1); 
						grp_nfo[i].splice(10, 1, t);	
						if (qp.indexOf(t)<10){ des= "#t0" + qp.indexOf(t) ; }else{ des= "#t" + qp.indexOf(t); }; 
//						$(des).append('</br><img src="./n_flag/' + grp_nfo[i][12] + '.gif" width=26px style="border: 1px solid #E8E8E8"></br></br><span class="s16">' + grp_nfo[i][1] + '</span>');  //--- 토너먼트 대진표에 팀이름 출력
						$(des).append('</br><img src="https://api.fifa.com/api/v3/picture/flags-sq-2/' + grp_nfo[i][12] + '" width=26px style="border: 1px solid #E8E8E8"></br></br><span class="s16">' + grp_nfo[i][1] + '</span>');  //--- 토너먼트 대진표에 팀이름 출력
						data = $.map(grp_league22, function(element, index) {  //--- w49 이후 부분배열
							if (element[6].includes("w")) {
								return [element]
							};
						});
						setTimeout(function() {
							subj = t; 
							temp = data.filter(isFind7);
							b = Number(temp[0][6].substr(1,2))-12;
							if (subj==temp[0][7].substr(0,2)){a = 4;}; if (subj==temp[0][7].substr(2,2)){a = 5;};
							if (grp_league22[b][a]==""){
								grp_league22[b].splice(a, 1, grp_nfo[i][1]);  //--- 16강 팀이름 입력
							};
						}, 20);
					};  //--- A1, A2 .... (grp_nfo 배열에 입력) -- 중간순위, count==6이면 확정순위
				};
			};
		};
	});
};

//--- 8강 진출팀명 (w49 ~ w56) 입력 (grp_league22배열) & 토너먼트 대진표에 16강 경기결과 score / 적색선 출력
function m8(x){  //--- (32팀 참가)
	cc1 = (zz+po+x/2+1);  //--- 57 45 25
	cc0 = (zz+po+x/2+4);  //--- 60 48 29
	for (i=zz+po+1; i<grp_league22.length; i++){
		if (grp_league22[i][8] != ""){
			if (grp_league22[i][8].includes("_")){ 
				scor = grp_league22[i][8].split("_"); 
				score = scor[scor.length-1].split(":"); 
			}else{ 
				score = grp_league22[i][8].split(":");
			};  //--- 16강전 score

			des = "#t" + qp.indexOf("w"+(i+zz1));  //--- ③des
			if (i<cc1){ d = "8"; }else{ if (i<cc0+1){ d = "4" }else{ if (i==cc0+1 || i==cc0+2){ d = "2" }; if (i==cc0+3){ d = "3" }; if (i==cc0+4){ d = "1" }; }; };
			if (score[0]>score[1]){ 
				ntm = grp_league22[i][4]; 
				if (i>cc0){los = grp_league22[i][5]; };  //--- 34위전 진출팀
				$(des).addClass('lw'+d);  //--- 토너먼트 대진표 승자 붉은선, ④d는 8강이명 "8", 4강이면 "4"
			}else{ 
				ntm = grp_league22[i][5]; 
				if (i>cc0){los = grp_league22[i][4];};  //--- 34위전 진출팀
				$(des).addClass('rw'+d);  //--- 토너먼트 대진표 승자 붉은선, ④d는 8강이명 "8", 4강이면 "4"
			}; 
			if (i<cc0+1){
				subj = grp_league22[i][6];
				temp = data.filter(isFind7); 
				a = Number(temp[0][6].substr(1,2))-zz1;  //--- ①a 
				if (subj==temp[0][7].substr(0,3)){b = 4;}; if (subj==temp[0][7].substr(3,3)){b = 5;};  //--- ②b
				grp_league22[a].splice(b, 1, ntm);  //--- 8강 진출팀명 (w57 ~ w60) 입력
			};
			if (i==cc0+1){ grp_league22[cc0+4].splice(4, 1, ntm); grp_league22[cc0+3].splice(4, 1, los); if (score.length==2 && score[0]<score[1]){ wtg += "31a"}; };
			if (i==cc0+2){ grp_league22[cc0+4].splice(5, 1, ntm); grp_league22[cc0+3].splice(5, 1, los); if (score.length==2 && score[0]>score[1]){ wtg += "31b"}; };
			if (i==cc0+3){
				if (score.length==2){if (score[0]>score[1]){ $("#t37").append(grp_league22[i][4]); $("#t38").append(grp_league22[i][5]); 
					if (wtg.includes('31a')){	$('#t31a').css('border-top','2px dashed #ff80df').css('border-left','2px solid #ff80df');	}else{$('#t31a').css('border-right','2px solid #ff80df');};
				}else{ $("#t37").append(grp_league22[i][5]); $("#t38").append(grp_league22[i][4]);
					if (wtg.includes("31b")){$('#t31b').css('border-top','2px dashed #ff80df').css('border-right','2px solid #ff80df');}else{ $('#t31b').css('border-left','2px solid #ff80df');}; 
				}; };
			};  //--- 34위전 기록 (w63)
			if (i==cc0+4){ 
				if (score.length==2){if (score[0]>score[1]){ $(des).addClass('lw1'); $("#t35").append(grp_league22[i][4]); $("#t36").append(grp_league22[i][5]); 
				}else{ $(des).addClass('rw1'); $("#t35").append(grp_league22[i][5]); $("#t36").append(grp_league22[i][4]); }; }; 
			}; //--- 결승전 기록 (w64)
		};
	}; 
};

//--- 8강 진출팀명 (w49 ~ w56) 입력 (grp_league22배열) & 토너먼트 대진표에 8강 경기결과 score / 적색선 출력
function m8b(x){  //--- (16팀 참가)
	cc1 = (zz+po+x/2+1);  //--- 57 45 25 28(po3) 19(po2)
	cc0 = (zz+po+x/2+4);  //--- 60 48 28 31(po3) 22(po2)
	for (i=zz+po+1; i<grp_league22.length; i++){
		if (grp_league22[i][8] != ""){
			if (grp_league22[i][8].includes("_")){ 
				scor = grp_league22[i][8].split("_"); 
				score = scor[scor.length-1].split(":"); 
			}else{ 
				score = grp_league22[i][8].split(":");
			};  //--- 8강전 score

			des = "#t8" + qp.indexOf("w"+(i+zz1));  //--- ③des
			if (i<cc1){ 
				d = "4"; 
			}else{ 
				if (i==cc1 || i==cc1+1){ 
					d = "2"; 
				}; 
				if (i==cc1+2){ 
					d = "3"; 
				}; if (i==cc1+3){ 
					d = "1"; 
				}; 
			}; 
			if (score[0]>score[1]){ 
				ntm = grp_league22[i][4]; 
				if (i>zz+po+4){los = grp_league22[i][5]; };  //--- 34위전 진출팀
				$(des).addClass('lw'+d);  //--- 토너먼트 대진표 승자 붉은선, ④d는 8강이명 "8", 4강이면 "4"
			}else{ 
				ntm = grp_league22[i][5]; 
				if (i>zz+po+4){los = grp_league22[i][4];};  //--- 34위전 진출팀
				$(des).addClass('rw'+d);  //--- 토너먼트 대진표 승자 붉은선, ④d는 8강이명 "8", 4강이면 "4"
			}; 
			if (i==cc1){ grp_league22[cc1+3].splice(4, 1, ntm); grp_league22[cc1+2].splice(4, 1, los); if (score.length==2 && score[0]<score[1]){ wtg += "31a"}; };
			if (i==cc1+1){ grp_league22[cc1+3].splice(5, 1, ntm); grp_league22[cc1+2].splice(5, 1, los); if (score.length==2 && score[0]>score[1]){ wtg += "31b"}; };
			if (i==cc1+2){
				if (score.length==2){
					if (score[0]>score[1]){ 
						$("#t37").append(grp_league22[i][4]); $("#t38").append(grp_league22[i][5]);
						if (wtg.includes('31a')){	
							$('#t831a').css('border-top','2px dashed #ff80df').css('border-left','2px solid #ff80df');	
						}else{
							$('#t831a').css('border-right','2px solid #ff80df');
						};
					}else{ 
						$("#t37").append(grp_league22[i][5]); $("#t38").append(grp_league22[i][4]);
						if (wtg.includes("31b")){
							$('#t831b').css('border-top','2px dashed #ff80df').css('border-right','2px solid #ff80df');
						}else{ 
							$('#t831b').css('border-left','2px solid #ff80df');
						}; 
					}; 
				};
			};  //--- 34위전 기록 (w63)
			if (i==cc1+3){ 
				if (score.length==2){if (score[0]>score[1]){ $(des).addClass('lw1'); $("#t35").append(grp_league22[i][4]); $("#t36").append(grp_league22[i][5]);
				}else{ $(des).addClass('rw1'); $("#t35").append(grp_league22[i][5]); $("#t36").append(grp_league22[i][4]);}; }; 
			}; //--- 결승전 기록 (w64)
		};
	}; 
};

//--- 8강 진출팀명 (w49 ~ w56) 입력 (grp_league22배열) & 토너먼트 대진표에 8강 경기결과 score / 적색선 출력
function m8c(x){  //--- (16팀 참가)
	for (i=zz+1; i<grp_league22.length; i++){
		a=0; b=0;
		if (grp_league22[i][8] != ""){
			if (grp_league22[i][8].includes("_")){ 
				scor = grp_league22[i][8].split("_"); 
				score = scor[scor.length-1].split(":"); 
			}else{ 
				score = grp_league22[i][8].split(":");
			};  //--- score

			des = "#t4" + qp.indexOf("w"+(i+zz1));  //--- ③des

			if (sele=="3"){ 
				$("#t429").addClass('lw4'); $("#t430").addClass('rw4'); 
				if (i==(zz+1)){
					if (score.length==2){
						if (score[0]>score[1]){ 
							$("#t431").addClass('lw3'); 
							$("#t37").append(grp_league22[i][4]); $("#t38").append(grp_league22[i][5]);
							if (wtg.includes('31a')){	
								$('#t431a').css('border-top','2px dashed #ff80df').css('border-left','2px solid #ff80df');	
							}else{
								$('#t431a').css('border-right','2px solid #ff80df');
							};
						}else{ 
							$("#t431").addClass('rw3'); 
							$("#t37").append(grp_league22[i][5]); $("#t38").append(grp_league22[i][4]);
							if (wtg.includes("31b")){
								$('#t431b').css('border-top','2px dashed #ff80df').css('border-right','2px solid #ff80df');
							}else{ 
								$('#t431b').css('border-left','2px solid #ff80df');
							}; 
						}; 
					};
				};  //--- 34위전 기록 (w63)
				if (i==(zz+2)){ 
					if (score.length==2){if (score[0]>score[1]){ $(des).addClass('lw1'); $("#t35").append(grp_league22[i][4]); $("#t36").append(grp_league22[i][5]);
					}else{ $(des).addClass('rw1'); $("#t35").append(grp_league22[i][5]); $("#t36").append(grp_league22[i][4]);}; }; 
				}; //--- 결승전 기록 (w64)
			}else{ 
				if (i==(zz+1) || i==(zz+2)){ d = "2"; }; if (i==(zz+3)){ d = "3"; }; if (i==(zz+4)){ d = "1"; }; 
				if (score[0]>score[1]){ 
					ntm = grp_league22[i][4]; 
					if (i>zz){los = grp_league22[i][5]; };  //--- 34위전 진출팀
					$(des).addClass('lw'+d);  //--- 토너먼트 대진표 승자 붉은선, ④d는 8강이명 "8", 4강이면 "4"
				}else{ 
					ntm = grp_league22[i][5]; 
					if (i>zz){los = grp_league22[i][4];};  //--- 34위전 진출팀
					$(des).addClass('rw'+d);  //--- 토너먼트 대진표 승자 붉은선, ④d는 8강이명 "8", 4강이면 "4"
				}; 
				if (i==(zz+1)){ grp_league22[(zz+4)].splice(4, 1, ntm); grp_league22[(zz+3)].splice(4, 1, los); if (score.length==2 && score[0]<score[1]){ wtg += "31a"}; };
				if (i==(zz+2)){ grp_league22[(zz+4)].splice(5, 1, ntm); grp_league22[(zz+3)].splice(5, 1, los); if (score.length==2 && score[0]>score[1]){ wtg += "31b"}; };
				if (i==(zz+3)){
					if (score.length==2){
						if (score[0]>score[1]){ 
							$("#t37").append(grp_league22[i][4]); $("#t38").append(grp_league22[i][5]);
							if (wtg.includes('31a')){	
								$('#t431a').css('border-top','2px dashed #ff80df').css('border-left','2px solid #ff80df');	
							}else{
								$('#t431a').css('border-right','2px solid #ff80df');
							};
						}else{ 
							$("#t37").append(grp_league22[i][5]); $("#t38").append(grp_league22[i][4]);
							if (wtg.includes("31b")){
								$('#t431b').css('border-top','2px dashed #ff80df').css('border-right','2px solid #ff80df');
							}else{ 
								$('#t431b').css('border-left','2px solid #ff80df');
							}; 
						}; 
					};
				};  //--- 34위전 기록 (w63)
				if (i==(zz+4)){ 
					if (score.length==2){if (score[0]>score[1]){ $(des).addClass('lw1'); $("#t35").append(grp_league22[i][4]); $("#t36").append(grp_league22[i][5]);
					}else{ $(des).addClass('rw1'); $("#t35").append(grp_league22[i][5]); $("#t36").append(grp_league22[i][4]);}; }; 
				}; //--- 결승전 기록 (w64)
			};
		};
	}; 
};

//--- (32팀) 경기일정표 출력 (grp_league22 배열)
function skd(a){  //----- 조별리그 및 16강 토너먼트 전체 경기일정  a: 토너먼트 팀수 (16, 8, 4)
	$( function() {
		$("#out2").empty(); outstring1 = ""; b = "경기 일정";
		out_string1 = '<span class="gs">' + b + '</span>';
		for (i=0; i<grp_league22.length; i++){
			if (i==0){  //--- 조별리그 일정 (title)
						out_string1 += '<span class="lst lst0">' + grp_league22[i][1] + '</span><span class="lst lst0">' + grp_league22[i][2] + '</span><span class="lst lst0">' + grp_league22[i][4] + '</span><span class="lst lst0">' + grp_league22[i][5] + '</span><span class="lst lst0">' + grp_league22[i][6] + '</span><span class="lst lst0">' + grp_league22[i][7] + '</span><span class="lst lst0">' + grp_league22[i][8] + '</span>' 
			}else{ 
				if (i<zz+po+1){  //--- 조별리그 일정 (팀이름 입력)
					if (grp_league22[i][4]==""){
						subj = grp_league22[i][7].substr(0,1) + "0" + grp_league22[i][7].substr(1,1);
						temp = w_cup22.filter(isFind1); tm = temp[0][2]; grp_league22[i].splice(4, 1, tm);
					};
					if (grp_league22[i][5]==""){
						subj = grp_league22[i][7].substr(0,1) + "0" + grp_league22[i][7].substr(2,1);
						temp = w_cup22.filter(isFind1); tm = temp[0][2]; grp_league22[i].splice(5, 1, tm);
					};
					out_string1 += '<span class="lst">' + grp_league22[i][1].substr(0,5) + '</span><span class="lst">' + grp_league22[i][2].substr(0,5) + '</span><span class="lst">' + grp_league22[i][4] + '</span><span class="lst">' + grp_league22[i][5] + '</span><span class="lst">' + grp_league22[i][6] + '</span><span class="lst">' + grp_league22[i][7] + '</span><span class="lst">' + grp_league22[i][8] + '</span>' 
				}else{ 
					if (i<(zz+po+a/2+1)){  //--- 16강 토너먼트 경기일정표 
						out_string1 += '<span class="lst">' + grp_league22[i][1].substr(0,5) + '</span><span class="lst">' + grp_league22[i][2].substr(0,5) + '</span><span class="lst lsr" id="' + grp_league22[i][7].substr(0,2) + '">' + grp_league22[i][4] + '</span><span class="lst lsr" id="' + grp_league22[i][7].substr(2,2) + '">' + grp_league22[i][5] + '</span><span class="lst">' + grp_league22[i][6] + '</span><span class="lst">' + grp_league22[i][7] + '</span><span class="lst">' + grp_league22[i][8] + '</span>' 
					}else{  //--- 조별리그 경기일정
						out_string1 += '<span class="lst">' + grp_league22[i][1].substr(0,5) + '</span><span class="lst">' + grp_league22[i][2].substr(0,5) + '</span><span class="lst">' + grp_league22[i][4] + '</span><span class="lst">' + grp_league22[i][5] + '</span><span class="lst">' + grp_league22[i][6] + '</span><span class="lst">' + grp_league22[i][7] + '</span><span class="lst">' + grp_league22[i][8] + '</span>' 
					};
				};
			};
		};
		$("#out2").empty();
		$("#out2").append(out_string1);
	});
};

//--- 배열에서 subj 를 가져오는 함수 (2열기준 부분배열 가져오기)
function isFind1(element)  {
	if(element[1] === subj)  {
		return true;
	};
};

//--- 배열에서 subj 를 가져오는 함수 (1열기준 부분배열 가져오기)
function isFind0(element)  {
	if (element[0]===(subj)) {
		return true;
	};
};

//--- 배열에서 subj 를 가져오는 함수 (8열기준 부분배열 가져오기)
function isFind7(element)  {
	if (element[7].includes(subj)) {
		return true;
	};
};

//--- csv파일 읽어오는 함수
function fread(fn){
    $(function (){
//		let fileName = "../uni_2o4o/" + fn + ".csv";	// 파일 이름
		let fileName = "./" + fn + ".csv";	// 파일 이름
//		let fileName = "../local/" + fn + ".csv";	// 파일 이름

		$.ajax({
			url:fileName,
			dataType:'text',
			success: function(da) {
				let textLine = '<script type="text/javascript">let ' + fn + '=[';
							let rows = da.split('\n');
							for (let i = 0; i < rows.length; i++) {
					if (i == 0){textLine += '['}else{textLine += ',['};
					let cells = rows[i].split(',');
									for (let j = 0; j < cells.length; j++) {
						textLine += '"';
						textLine += cells[j].trim();;
						if (j == cells.length-1){textLine += '"'}else{textLine += '",'};
					}
					textLine += ']';
				}	
				textLine += ']';			
				$('#dvCSV').append(textLine);
			}
		});
    });
};
