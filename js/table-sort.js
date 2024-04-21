var app = new Vue({
        el: '#table-sort',
        data: {
          data: 
            
            [

            {
              date: '2022/09/23',
              medNumb: '21212121',
              medNumb1: '000000001',
              medNumb2: 'barf', 
              datetime: '2022/09/23 11:02',
              machineNub: 'A2',
              dtr1: '王華容',
              dtr2: '金佩佩',
            },
            {
                date: '2022/09/23',
                medNumb: '21212121',
                medNumb1: '000000001',
                medNumb2: 'barf', 
                datetime: '2022/09/23 11:02',
                machineNub: 'A2',
                dtr1: '王華容',
                dtr2: '金佩佩',
              },
              {
                date: '2022/09/23',
                medNumb: '21212121',
                medNumb1: '000000001',
                medNumb2: 'barf', 
                datetime: '2022/09/23 11:02',
                machineNub: 'A2',
                dtr1: '王華容',
                dtr2: '金佩佩',
              },
              {
                date: '2022/09/23',
                medNumb: '21212121',
                medNumb1: '000000001',
                medNumb2: 'barf', 
                datetime: '2022/09/23 11:02',
                machineNub: 'A2',
                dtr1: '王華容',
                dtr2: '金佩佩',
              },{
                date: '2022/09/23',
                medNumb: '21212121',
                medNumb1: '000000001',
                medNumb2: 'barf', 
                datetime: '2022/09/23 11:02',
                machineNub: 'A2',
                dtr1: '王華容',
                dtr2: '金佩佩',
              },
              {
                date: '2022/09/23',
                medNumb: '21212121',
                medNumb1: '000000001',
                medNumb2: 'barf', 
                datetime: '2022/09/23 11:02',
                machineNub: 'A2',
                dtr1: '王華容',
                dtr2: '金佩佩',
              },
              {
                  date: '2022/09/23',
                  medNumb: '21212121',
                  medNumb1: '000000001',
                  medNumb2: 'barf', 
                  datetime: '2022/09/23 11:02',
                  machineNub: 'A2',
                  dtr1: '王華容',
                  dtr2: '金佩佩',
                },
                {
                  date: '2022/09/23',
                  medNumb: '21212121',
                  medNumb1: '000000001',
                  medNumb2: 'barf', 
                  datetime: '2022/09/23 11:02',
                  machineNub: 'A2',
                  dtr1: '王華容',
                  dtr2: '金佩佩',
                },
                {
                  date: '2022/09/23',
                  medNumb: '21212121',
                  medNumb1: '000000001',
                  medNumb2: 'barf', 
                  datetime: '2022/09/23 11:02',
                  machineNub: 'A2',
                  dtr1: '王華容',
                  dtr2: '金佩佩',
                },{
                  date: '2022/09/23',
                  medNumb: '21212121',
                  medNumb1: '000000001',
                  medNumb2: 'barf', 
                  datetime: '2022/09/23 11:02',
                  machineNub: 'A2',
                  dtr1: '王華容',
                  dtr2: '金佩佩',
                }
          ],
          thData: [
            { title: '品名', sortBy: null },
            { title: '品名', sortBy: null },
            { title: '價格', sortBy: 'price' },
            { title: '到期日', sortBy: 'expiryDate' }
          ],
          sortBy: '',
          sortDirection: 1 , // 1: big to small;  -1: small to big,

          // 
          checked: false,
          checkGroup: [],


          /* setting/account*/
          setingAct:[
            {
              id:1,
              acNb: 'IIJJKK',
              name:'JulyKing',
              act:'JLY',
              state:1,
              role:'一般使用者'
            },
            {
              id:2,
              acNb: 'RRMj',
              name:'roman tic',
              act:'ROM',
              state:0,
              role:'管理者'
            },
            {
              id:3,
              acNb: 'HHHi',
              name:'HIhhii',
              act:'hhiiiHH',
              state:1,
              role:'一般使用者'
            },
            {
              id:4,
              acNb: 'HHHi',
              name:'HIhhii',
              act:'hhiiiHH',
              state:1,
              role:'一般使用者'
            },
            {
              id:5,
              acNb: 'HHHi',
              name:'HIhhii',
              act:'hhiiiHH',
              state:1,
              role:'一般使用者'
            },
          ]


        },
        computed: {
          sortedData() {
            const { sortBy, sortDirection, data } = this; 
      
            if (sortBy !== 'price' && sortBy !== 'expiryDate') {
              return data.slice();
            }
            return data.sort((a, b) => (
              sortDirection * (b[sortBy] - a[sortBy])        
            ));
          }
        },
        methods: {
          setSortBy(sortBy) {
            if (sortBy === null) return;
            this.sortDirection = (sortBy === this.sortBy) 
              ? -1 * this.sortDirection 
              : 1;
            this.sortBy = sortBy;
          },

          // check all
          allCheck: function () {
            for (var i = 1; i <= 50; i++) {
              if (!this.checked) this.checkGroup.push(i)
              else this.checkGroup.pop(i)
            }
          },

        }
      });